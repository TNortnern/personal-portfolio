<template>
  <div>
    <Overlay :is-open="contactMenuOpen" />
    <transition name="contact-drawer">
      <div
        v-if="contactMenuOpen"
        v-click-outside="
          () => (contactMenuOpen ? toggleContactMenu() : () => {})
        "
        class="border-box shadow-2xl fixed top-0 left-0 flex flex-col p-8 border-black space-y-8 bg-light-primary-blue w-3/4 sm:w-2/3 lg:w-contact-menu-lg h-full transform transition duration-300 z-50"
      >
        <button
          class="ml-auto rounded-xl cursor-pointer hover:text-red-500 focus:text-red-500"
          @click.prevent="toggleContactMenu"
        >
          <svg
            class="w-7 h-7 text-white hover:text-red-500 fill-current"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div class="text-center text-2xl text-white">Contact Me</div>
        <div class="flex justify-center">
          <generic-form
            ref="form"
            :fields="[
              {
                name: 'name',
                placeholder: 'Name',
                rules: {
                  required: true,
                },
              },
              {
                name: 'message',
                variant: 'textarea',
                placeholder: 'Message',
                rules: {
                  required: true,
                },
                divClass: 'w-64',
              },
            ]"
            @submit="submit"
          >
            <button
              slot="submit"
              type="submit"
              class="btn-primary mt-3 w-full block"
            >
              Send
            </button>
          </generic-form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, useContext } from '@nuxtjs/composition-api'
import GenericForm from '../common/genericform/GenericForm.vue'
import { useSuccessToast, useWarningToast } from '~/hooks/Alerts'
export const contactMenuOpen = ref(false)
export const toggleContactMenu = () =>
  (contactMenuOpen.value = !contactMenuOpen.value)
export default {
  components: { GenericForm },
  setup() {
    const { $axios } = useContext()
    const form = ref(null)
    return {
      contactMenuOpen,
      toggleContactMenu,
      form,
      submit: async ({ message, name }) => {
        try {
          await $axios.post(
            'https://personal-portfolio-be.herokuapp.com/email',
            {
              from: 'foodeater563@outlook.com',
              to: 'traynorthern@yahoo.com',
              subject:
                "Hello Trayvon, I'm interested in speaking with you, " + name,
              html: message,
            }
          )
          useSuccessToast({
            message: 'Received your message! Thank you.',
          })
          form.value.initializeForm()
        } catch (error) {
          useWarningToast({
            message: 'Uh oh... Something went wrong.',
          })
        }
      },
    }
  },
}
</script>

<style></style>
