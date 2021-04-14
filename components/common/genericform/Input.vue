<template>
  <div class="mb-2">
    <label class="block">
      <span
        class="block mb-1"
        :class="(otherData && otherData.labelClasses) || 'text-black'"
        >{{ label }}</span
      >
      <input
        :ref="refName()"
        :value="value"
        :type="inputType"
        class="block w-full border-0 px-5 py-2 font-inter focus:outline-none text-black"
        :class="(otherData && otherData.inputClasses) || resolveVariant"
        :placeholder="placeholder"
        @keyup.enter="unfocus()"
        @input="$emit('input', $event.target.value)"
      />
      <!-- <span v-if="errors" class="text-red-500">{{ errors[0] }}</span> -->
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    blurOnEnter: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: [Array, String],
      default: null,
    },
    otherData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      nameOfRef: '',
    }
  },
  computed: {
    resolveVariant() {
      if (
        this.otherData &&
        this.otherData.variant &&
        this.otherData.variant === 'dark'
      ) {
        return 'form-input bg-dark-mode-bg text-black'
      }
      return 'form-input bg-app-main-gray text-black'
    },
  },
  methods: {
    refName() {
      const intense =
        '_' +
        Math.random().toString(36).substr(2, 9) +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
      if (!this.nameOfRef) {
        this.nameOfRef = intense + this.name
      }
      return this.nameOfRef
    },
    unfocus() {
      if (this.blurOnEnter) {
        this.$refs[this.nameOfRef].blur()
      }
    },
  },
}
</script>

<style></style>
