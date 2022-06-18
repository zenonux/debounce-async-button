<template>
  <p>
    <DebounceAsyncButton> common button </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @click="testAsync">
      button with async function
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @click="testAsync('arguments')">
      button with async function with arguments
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @click="testSync">
      button with common function
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @click="testSync('arguments')">
      button with common function with arguments
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton disabled @click="testAsync">
      disabled button
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @click.stop="testAsync('modify')">
      click with event modify symbol button(Not support yet.)
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
