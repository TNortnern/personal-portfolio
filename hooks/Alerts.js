import Swal from 'sweetalert2'
export function useSuccessToast(payload = { message: '' }) {
  const { message } = payload
  Swal.fire({
    toast: true,
    position: 'top',
    timerProgressBar: true,
    text: message || 'Success',
    icon: 'success',
    confirmButtonColor: '#48bb78',
    timer: 3000,
  })
}
export function useWarningToast(payload = { message: '' }) {
  const { message } = payload
  Swal.fire({
    toast: true,
    position: 'top',
    timerProgressBar: true,
    text: message || 'Something went wrong',
    icon: 'warning',
    confirmButtonColor: '#de3618',
    timer: 3000,
  })
}

export function useWarningToastMultiMessage(messages) {
  const messageConcat = messages.map((message) => message.message).join('\n')
  Swal.fire({
    toast: true,
    position: 'top',
    timerProgressBar: true,
    text: messageConcat || 'Something went wrong',
    icon: 'warning',
    confirmButtonColor: '#de3618',
    timer: 3000,
  })
}
