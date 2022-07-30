<template>
  <p>
    <DebounceAsyncButton> common button </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @handler="testAsync">
      button with async function
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @handler="testAsync('arguments')">
      button with async function with arguments
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @handler="testSync">
      button with common function
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @handler="testSync('arguments')">
      button with common function and arguments
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton disabled @handler="testAsync">
      disabled button
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton v-slot="slotProps" @handler="testAsync">
      <el-button
        type="primary"
        :loading="slotProps.loading"
        :disabled="slotProps.disabled"
        >button with Element Plus</el-button
      >
    </DebounceAsyncButton>
  </p>
</template>
<script setup lang="ts">
import DebounceAsyncButton from '../src/DebounceAsyncButton.vue'

const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

const testAsync = async (name = '') => {
  await sleep(3000)
  console.log('test async ' + name)
}
const testSync = (name = '') => {
  console.log('test sync ' + name)
}
</script>
