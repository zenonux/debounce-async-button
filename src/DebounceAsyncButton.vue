<template>
  <div
    @click="onSubmit"
    v-bind="attrs"
    :class="{
      'debounce-async-button': true,
      'debounce-async-button-loading': loading,
      'debounce-async-button-disabled': disabled,
    }"
  >
    <slot :loading="loading" :disabled="disabled"></slot>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<script setup lang="ts" name="DebounceAsyncButton">
import { ref, useAttrs, computed } from 'vue'
let { onClick, ...attrs } = useAttrs()
const loading = ref(false)

const disabled = computed(() => {
  return attrs.hasOwnProperty('disabled') || attrs.disabled
})

const onSubmit = async (e: Event) => {
  if (!onClick || disabled.value || loading.value) {
    return
  }
  loading.value = true
  await (onClick as any)(e)
  loading.value = false
}
</script>
