<template>
  <p>
    <DebounceAsyncButton>
      <button @click="testAsyncWithArgs('arguments')">
        button with async function and arguments
      </button>
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton>
      <button @click="testSync">button with common function</button>
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton>
      <button @click="testSyncWithArgs('arguments')">
        button with common function and arguments
      </button>
    </DebounceAsyncButton>
  </p>
  <p>
    <DebounceAsyncButton>
      <button disabled @click="testAsync">disabled button</button>
    </DebounceAsyncButton>
  </p>
</template>
<script setup lang="ts">
import DebounceAsyncButton from "../src/DebounceAsyncButton.vue";

const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const testAsync = async (e: Event) => {
  await sleep(3000);
  console.log("test async ", e);
};
const testAsyncWithArgs = async (name: string) => {
  await sleep(3000);
  console.log("test async " , name);
};
const testSync = (e: Event) => {
  console.log("test sync " , e);
};
const testSyncWithArgs = (name: string) => {
  console.log("test sync " , name);
};
</script>
