import type { App } from 'vue'
import DebounceAsyncButton from './DebounceAsyncButton.vue'

DebounceAsyncButton.install = function (app: App) {
  app.component('DebounceAsyncButton', DebounceAsyncButton)
}

export default DebounceAsyncButton
