var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { defineComponent, useAttrs, ref, computed, openBlock, createElementBlock, mergeProps, unref, withModifiers, renderSlot } from "vue";
const _hoisted_1 = ["onClick"];
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __name: "DebounceAsyncButton",
  setup(__props) {
    let _a = useAttrs(), { onHandler } = _a, attrs = __objRest(_a, ["onHandler"]);
    const loading = ref(false);
    const createAsyncTask = async (syncTask) => {
      const newSyncTask = await Promise.resolve(syncTask);
      return newSyncTask();
    };
    const isAsyncFunction = (fn) => {
      let fnStr = fn.toString();
      return Object.prototype.toString.call(fn) === "[object AsyncFunction]" || fnStr.includes("return _regenerator.default.async(function");
    };
    const enabled = computed(() => {
      return !attrs.hasOwnProperty("disabled") || !attrs.disabled;
    });
    const onSubmit = async () => {
      if (!onHandler || !enabled || loading.value) {
        return;
      }
      loading.value = true;
      if (!isAsyncFunction(onHandler)) {
        await createAsyncTask(onHandler);
      } else {
        await onHandler();
      }
      loading.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", mergeProps(unref(attrs), {
        onClick: withModifiers(onSubmit, ["stop"]),
        class: {
          "debounce-async-button": true,
          "debounce-async-button-loading": loading.value,
          "debounce-async-button-disabled": !unref(enabled)
        }
      }), [
        renderSlot(_ctx.$slots, "default", {
          loading: loading.value,
          disabled: !unref(enabled)
        })
      ], 16, _hoisted_1);
    };
  }
}));
_sfc_main.install = function(app) {
  app.component(_sfc_main.name, _sfc_main);
};
export { _sfc_main as default };
