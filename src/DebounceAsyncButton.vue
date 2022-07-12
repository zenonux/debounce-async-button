<template>
  <button
    v-bind="attrs"
    @click.stop="onSubmit"
    :class="{
      'debounce-async-button': true,
      'debounce-async-button-loading': loading,
      'debounce-async-button-disabled': !enabled,
    }"
  >
    <slot :loading="loading" :disabled="!enabled"></slot>
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<script setup lang="ts" name="DebounceAsyncButton">
import { ref, useAttrs, computed } from 'vue'
type AsyncFunc = (...args: any) => Promise<any>
let { onHandler, ...attrs } = useAttrs()
const loading = ref(false)

const createAsyncTask = async (syncTask: any) => {
  const newSyncTask = await Promise.resolve(syncTask)
  return newSyncTask()
}

const isAsyncFunction = (fn: any) => {
  let fnStr = fn.toString()
  return (
    Object.prototype.toString.call(fn) === '[object AsyncFunction]' ||
    fnStr.includes('return _regenerator.default.async(function')
  )
}
const enabled = computed(() => {
  return !attrs.hasOwnProperty('disabled') || !attrs.disabled
})

const onSubmit = async () => {
  if (!onHandler || !enabled || loading.value) {
    return
  }
  loading.value = true
  if (!isAsyncFunction(onHandler)) {
    await createAsyncTask(onHandler)
  } else {
    await (onHandler as AsyncFunc)()
  }
  loading.value = false
}
</script>
