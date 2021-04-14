<template>
  <div>
    <form
      :class="(options && options.formClass) || ''"
      @submit.prevent="action()"
    >
      <div
        v-for="(field, i) in fields.filter(
          (f) => f.show === undefined || f.show !== false
        )"
        :key="i"
        :class="field.divClass"
      >
        <component
          :is="field.component || resolveVariant(field.variant)"
          v-model="formData[field.name]"
          :value="formData[field.name]"
          :name="field.name"
          :label="field.label"
          :placeholder="field.placeholder"
          :class="`${options && options.parentClasses} ${field.parentClass}`"
          :default-value="field.defaultValue"
          :input-type="field.type"
          :multiple="field.multiple"
          :other-data="field.otherData"
          :blur-on-enter="field.blurOnEnter"
          :on-change="field.onChange"
          :values="field.values"
          :obj-key="field.objKey"
          :errors="getErrors(field.name)"
          @setValue="setValue"
        />
        <span
          v-if="getErrors(field.name) && showErrors"
          class="text-red-500"
          :class="field.otherData && field.otherData.errorClasses"
          >{{
            customErrors[field.name]
              ? customErrors[field.name]
              : getErrors(field.name)[0]
          }}</span
        >
      </div>
      <div v-if="!$slots.submit" class="w-full mt-4">
        <Button
          :class="`${options && options.submitClasses}${
            hideSubmit ? ' hidden' : ''
          }`"
          type="submit"
          >{{ submitText }}</Button
        >
      </div>
      <slot v-else name="submit" />
    </form>
  </div>
</template>

<script>
import {
  ref,
  onBeforeMount,
  set,
  watch,
  onMounted,
  computed,
} from '@nuxtjs/composition-api'
// eslint-disable-next-line no-unused-vars
import validate from 'validate.js'
import TextArea from './TextArea'
import Input from './Input'
import { useWarningToast } from '~/hooks/Alerts'
export default {
  components: {
    TextArea,
    Input,
  },
  props: {
    fields: {
      type: Array,
      default: () => {},
    },
    options: {
      type: Object,
      default: () => {},
    },
    passedErrors: {
      type: Array,
      default: () => [],
    },
    hideSubmit: {
      type: Boolean,
      default: false,
    },
    submitText: {
      type: String,
      default: 'Submit',
    },
    beforeSubmit: {
      type: Function,
      default: () => {},
    },
    errorAlert: {
      type: [Object, Boolean],
      default: false,
    },
    onDataChange: {
      type: Function,
      default: null,
    },
    showErrors: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit, listeners }) {
    const formData = ref({})
    const customErrors = ref({})
    const hasChanged = ref([])
    const submitted = ref(false)
    const clearCustomErrors = () => {
      customErrors.value = {}
    }
    const setCustomError = ({ key, value, clear }) => {
      if (clear) {
        delete customErrors.value[key]
      } else {
        set(customErrors.value, key, value)
      }
    }
    // const hasInitialized = ref(false)
    const resolveVariant = (variant = null) => {
      if (!variant) {
        return 'Input'
      }
      if (variant.toLowerCase() === 'textarea') {
        return 'TextArea'
      }
      return variant.charAt(0).toUpperCase() + variant.slice(1)
    }
    const clearField = (fieldName, defaultValue) => {
      set(formData.value, fieldName, defaultValue || '')
    }
    const initializeForm = (arr) => {
      submitted.value = false
      // manually pass your fields or have the form use your props fields
      let resolvedArr = arr
      if (!arr) {
        resolvedArr = props.fields
      }
      resolvedArr.forEach((field) => {
        // here we set any defaults for the form
        const defaultValue = field.defaultValue || ''
        set(formData.value, field.name, defaultValue)
        // grab all the rules and put them within an array for validating
      })
    }
    onBeforeMount(() => {
      initializeForm()
    })
    const action = async () => {
      customErrors.value = {}
      submitted.value = true
      const beforeSubmit = await props.beforeSubmit(formData.value)
      const error =
        beforeSubmit && beforeSubmit.error ? beforeSubmit.error : false
      const invalid =
        Object.entries(computedErrors.value).length ||
        Object.entries(customErrors.value).length ||
        error
      if (invalid && props.errorAlert) {
        useWarningToast({
          message: props.errorAlert.message || 'Error submitting form',
        })
      }
      const temp = {}
      Object.assign(temp, formData.value)
      if (!invalid) {
        await emit('submit', temp)
      }
    }
    const setValue = ({ name, payload }) => {
      formData.value[name] = payload
    }
    onMounted(() => {
      // check if the parent component wants to listen for change
      if (
        props.onDataChange ||
        listeners.change ||
        (props.options && props.options.validateOnChange)
      ) {
        watch(formData.value, (val) => {
          if (props.options && props.options.validateOnChange) {
            const hasChangedArr = Object.entries(val)
            hasChangedArr.forEach((element) => {
              if (element[1]) {
                if (!hasChanged.value.includes(element[0])) {
                  hasChanged.value.push(element[0])
                }
              }
            })
          }
          if (listeners.change) {
            emit('change', val)
          }
          if (props.onDataChange) {
            props.onDataChange(val)
          }
        })
      }
    })
    const computedErrors = computed(() => {
      let errorsObj = {}
      computedValidateArray.value.forEach((eachValidator) => {
        const keyName = Object.keys(eachValidator)[0]
        if (
          props.options &&
          props.options.validateOnChange &&
          !submitted.value
        ) {
          if (!hasChanged.value.includes(keyName)) {
            return
          }
        }
        const { constraints, options } = eachValidator[keyName]
        const keyValue = formData.value[keyName]
        const validateObj = {}
        validateObj[keyName] = keyValue
        const v = validate(validateObj, constraints, options)
        if (v) {
          errorsObj = Object.assign(errorsObj, v)
        }
      })
      return errorsObj
    })
    const getErrors = (name) => {
      if (
        (props.options && props.options.validateOnChange) ||
        submitted.value
      ) {
        if (customErrors.value[name]) {
          return customErrors.value[name]
        }
        return computedErrors.value[name]
      }
      if (props.options && !props.options.validateOnChange && submitted.value) {
        if (customErrors.value[name]) {
          return customErrors.value[name]
        }
        return computedErrors.value[name]
      } else {
        return []
      }
    }
    const computedValidateArray = computed(() => {
      const varr = []
      props.fields.forEach((field) => {
        // grab all the rules and put them within an array for validating
        const ruleObj = {}
        if (field.rules && field.rules.required === false) {
          delete field.rules.required
        }
        // allows for more recognizeable validation rule
        if (
          (field.rules && field.rules.required) ||
          (props.options && props.options.requireAllFields)
        ) {
          if (field.rules) {
            // check if custom required validation was passed
            if (!field.rules.presence && field.rules.required === true) {
              if (field.rules.required === true) {
                field.rules.presence = {
                  allowEmpty: false,
                  message: 'is required.',
                }
              }
              delete field.rules.required
            }
          } else if (props.options && props.options.requireAllFields) {
            if (field.rules && field.rules.required) {
              delete field.rules.required
            }
            if (!field.rules) {
              field.rules = {}
            }
            field.rules.presence = {
              allowEmpty: false,
              message: 'is required.',
            }
          }
        }
        ruleObj[field.name] = {
          constraints: { [field.name]: field.rules },
          options: { ...field.rulesOptions },
        }
        varr.push(ruleObj)
      })
      return varr
    })
    const forceValidate = () => {
      submitted.value = true
    }
    const hasErrors = computed(() => {
      const getDefined = computedErrors.value
      const getCustom = customErrors.value
      const defined = Object.entries(getDefined).length
      const custom = Object.entries(getCustom).length
      return {
        getDefined,
        getCustom,
        defined,
        custom,
        answer: !!(defined || custom),
      }
    })
    return {
      formData,
      action,
      setValue,
      initializeForm,
      clearField,
      resolveVariant,
      customErrors,
      computedErrors,
      getErrors,
      setCustomError,
      computedValidateArray,
      forceValidate,
      clearCustomErrors,
      hasErrors,
    }
  },
}
</script>

<style></style>
