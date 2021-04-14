<template>
  <div>
    <label class="block">
      <span
        :class="(otherData && otherData.labelClasses) || 'text-black'"
        :style="otherData && otherData.labelStyle"
        >{{ label }}</span
      >
    </label>
    <textarea
      :value="value"
      :class="
        (otherData && otherData.inputClasses) ||
        'bg-darkish-gray text-black form-textarea'
      "
      :style="otherData && otherData.inputStyle"
      class="mt-1 block w-full"
      rows="3"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <!-- <span v-if="errors" class="text-red-500 block mt-1.5">{{
        errors[0]
      }}</span> -->
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
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
    errors: {
      type: Array,
      default: null,
    },
    otherData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>
