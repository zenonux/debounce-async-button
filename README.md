# DebounceAsyncButton

Vue3 component for debounce async function.
## How it works
Multi-click button will only invoke async function once,unless the promise is not pending.
## Install

```bash
npm i @urcloud/debounce-async-button -S

```

## Usage 

```html
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
    <DebounceAsyncButton @handler="testAsync('hello')">
      button with async function with arguments
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @handler="testSync">
      button with common function
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton @handler="testSync('hello')">
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
import DebounceAsyncButton from '@urcloud/debounce-async-button'

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

```
## Todo

- Support vue directives. 

## Changelog
v1.1.0
- Support slot scope. 
