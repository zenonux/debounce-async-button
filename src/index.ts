import type { App } from "vue";
import DebounceAsyncButton from "./DebounceAsyncButton.vue";

export default {
  install(app: App) {
    app.component(DebounceAsyncButton.name, DebounceAsyncButton);
  },
};
