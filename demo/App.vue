<template>
  <DebounceAsyncButton :handler="test"> 防抖按钮 </DebounceAsyncButton>
</template>
<script setup lang="ts">
import DebounceAsyncButton from "../src/DebounceAsyncButton.vue";

const sleep=()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(true)
    },3000)
  })
}

const test = async () => {
  await sleep()
  console.log('end')
};
</script>
