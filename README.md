# DebounceAsyncButton

debounce async button for vue.

## Install

```bash
npm i @urcloud/debounce-async-button -S

```

## Usage

```html
<template>
  <DebounceAsyncButton :handler="test"> test button </DebounceAsyncButton>
</template>
<script setup lang="ts">
  import DebounceAsyncButton from "./components/DebounceAsyncButton.vue";

  const sleep = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  };

  const test = async () => {
    await sleep();
    console.log("end");
  };
</script>
```
