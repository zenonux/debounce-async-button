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
    <DebounceAsyncButton v-slot="slotProps" @click="() => testAsync('click')">
      <button :loading="slotProps.loading">button</button>
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton
      v-slot="slotProps"
      disabled
      @click="() => testAsync('click')"
    >
      <button :loading="slotProps.loading" :disabled="slotProps.disabled">
        button disabled
      </button>
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncAbstractButton>
      <button @click="() => testAsync('click')">button</button>
    </DebounceAsyncAbstractButton>
  </p>
  <p>
    <DebounceAsyncAbstractButton>
      <button disabled @click="() => testAsync('click')">
        button disabled
      </button>
    </DebounceAsyncAbstractButton>
  </p>
</template>
<script setup lang="ts">
  import {
    DebounceAsyncButton,
    DebounceAsyncAbstractButton,
  } from "@urcloud/debounce-async-button";
  const delay = (time: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const testAsync = async (args: string) => {
    await delay(3000);
    console.log("test async ", args);
  };
</script>
```
