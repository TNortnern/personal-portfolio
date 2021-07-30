<template>
  <div>
    <Overlay :is-open="contactMenuOpen" />
    <transition name="contact-drawer">
      <div
        v-if="contactMenuOpen"
        v-click-outside="
          () => (contactMenuOpen ? toggleContactMenu(false) : () => {})
        "
        class="fixed top-0 left-0 z-50 flex flex-col w-3/4 h-full p-8 space-y-8 transition duration-300 transform border-black shadow-2xl border-box bg-light-primary-blue sm:w-2/3 lg:w-contact-menu-lg"
      >
        <button
          class="ml-auto cursor-pointer rounded-xl hover:text-red-500 focus:text-red-500"
          @click.prevent="toggleContactMenu"
        >
          <svg
            class="text-white fill-current w-7 h-7 hover:text-red-500"
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
        <div class="text-2xl text-center text-white">Contact Me</div>
        <div class="flex justify-center">
          <div>
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
                class="block w-full mt-3"
                :disabled="loading"
                :class="
                  !loading
                    ? 'btn-primary'
                    : 'btn border border-primary-blue text-white opacity-50 cursor-not-allowed'
                "
              >
                Send
              </button>
            </generic-form>
            <div v-if="loading" class="flex justify-center mt-4 mr-2">
              <div
                class="w-12 h-12 border-4 border-teal-600 rounded-full loader"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, useContext } from '@nuxtjs/composition-api'
import GenericForm from '../common/genericform/GenericForm.vue'
import { useSuccessToast, useWarningToast } from '~/hooks/Alerts'
const loading = ref(false)
export const contactMenuOpen = ref(false)
export const toggleContactMenu = (value) => {
  if (!loading.value) {
    if (value === true || value === false) {
      contactMenuOpen.value = value
    } else {
      contactMenuOpen.value = !contactMenuOpen.value
    }
  }
}

export default {
  components: { GenericForm },
  setup() {
    const { $axios } = useContext()
    const form = ref(null)
    return {
      contactMenuOpen,
      toggleContactMenu,
      form,
      loading,
      submit: async ({ message, name }) => {
        if (loading.value) {
          return
        }
        loading.value = true
        try {
          await $axios.post('https://personalport-be.herokuapp.com/email', {
            from: 'foodeater563@outlook.com',
            to: 'traynorthern@yahoo.com',
            subject:
              "Hello Trayvon, I'm interested in speaking with you, " + name,
            html: message,
          })
          useSuccessToast({
            message: 'Received your message! Thank you.',
          })
          form.value.initializeForm()
        } catch (error) {
          useWarningToast({
            message: 'Uh oh... Something went wrong.',
          })
        } finally {
          loading.value = false
        }
      },
    }
  },
}
</script>

<style scoped>
@keyframes loader-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  border-right-color: transparent;
  animation: loader-rotate 1s linear infinite;
}
</style>
