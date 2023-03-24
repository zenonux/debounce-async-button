<template>
  <div v-bind="attrs" @click.stop="onSubmit">
    <slot :loading="loading" :disabled="disabled"></slot>
  </div>
</template>
<script lang="ts">
import { ref, useAttrs, computed, defineComponent } from "vue";
export default defineComponent({
  name: "DebounceAsyncButton",
  inheritAttrs: false,
  setup() {
    let { onClick, ...attrs } = useAttrs();
    const loading = ref(false);
    const disabled = computed(() => {
      return attrs.hasOwnProperty("disabled") || attrs.disabled;
    });
    const onSubmit = async (e: Event) => {
      if (!onClick || disabled.value || loading.value) {
        return;
      }
      loading.value = true;
      await (onClick as any)(e);
      loading.value = false;
    };
    return {
      attrs,
      loading,
      disabled,
      onSubmit,
    };
  },
});
</script>
