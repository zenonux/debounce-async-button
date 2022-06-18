<template>
  <button
    v-bind="attrs"
    @click="onSubmit"
    :class="{
      'debounce-async-button': true,
      'debounce-async-button-loading': loading,
      'debounce-async-button-disabled': !enabled,
    }"
  >
    <slot></slot>
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
let { onClick, ...attrs } = useAttrs()
const loading = ref(false)

const createAsyncTask = (syncTask: any) => {
  return Promise.resolve(syncTask).then((syncTask2) => syncTask2())
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
  if (!onClick || !enabled || loading.value) {
    return
  }
  loading.value = true
  if (!isAsyncFunction(onClick)) {
    await createAsyncTask(onClick)
  } else {
    await (onClick as AsyncFunc)()
  }
  loading.value = false
}
</script>
