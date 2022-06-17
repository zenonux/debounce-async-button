<template>
  <button
    :class="{
      'debounce-async-button': true,
      'debounce-async-button-loading': loading,
      'debounce-async-button-disabled': disabled,
    }"
    @click.stop="onSubmit"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
type AsyncFunc = () => Promise<any>;
const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    handler?: AsyncFunc | null;
  }>(),
  {
    disabled: false,
    handler: null,
  }
);
const loading = ref(false);
const onSubmit = async () => {
  if (!props.handler || props.disabled || loading.value) {
    return;
  }
  loading.value = true;
  await (props.handler as AsyncFunc)();
  loading.value = false;
};
</script>
