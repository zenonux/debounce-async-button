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
import DebounceAsyncButton from "../src/DebounceAsyncButton.vue";
import DebounceAsyncAbstractButton from "../src/DebounceAsyncAbstractButton.vue";
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
