export default function({ store, redirect }) {
  if (store.getters['auth/authenticated']) {
    if (store.getters['auth/user'].role === 'driver') {
      return redirect('/driver/my-base')
    } else {
      return redirect('/')
    }
  }
}
