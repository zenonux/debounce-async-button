import type { App } from 'vue'
import DebounceAsyncButton from './DebounceAsyncButton.vue'

DebounceAsyncButton.install = function (app: App) {
  app.component(DebounceAsyncButton.name, DebounceAsyncButton)
}

export default DebounceAsyncButton
