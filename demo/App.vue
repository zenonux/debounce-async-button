<template>
  <p>
    <DebounceAsyncButton @click="testAsync">
      button with async function
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @click="testAsyncWithArgs('arguments')">
      button with async function and arguments
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @click="testSync">
      button with common function
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @click="testSyncWithArgs('arguments')">
      button with common function and arguments
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton disabled @click="testAsync">
      disabled button
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton v-slot="slotProps" @click="testAsync">
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
const testAsync = async (e: Event) => {
  await sleep(3000)
  console.log('test async ' + e)
}
const testAsyncWithArgs = async (name: string) => {
  await sleep(3000)
  console.log('test async ' + name)
}
const testSync = (e: Event) => {
  console.log('test sync ' + e)
}
const testSyncWithArgs = (name: string) => {
  console.log('test sync ' + name)
}
</script>
