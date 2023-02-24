import { defineComponent as l, useAttrs as u, ref as d, computed as c, openBlock as p, createElementBlock as f, mergeProps as m, withModifiers as b, renderSlot as v } from "vue";
const y = l({
  name: "DebounceAsyncButton",
  inheritAttrs: !1,
  setup() {
    let { onClick: e, ...t } = u();
    const n = d(!1), o = c(() => t.hasOwnProperty("disabled") || t.disabled);
    return {
      loading: n,
      disabled: o,
      attrs: t,
      onSubmit: async (r) => {
        !e || o.value || n.value || (n.value = !0, await e(r), n.value = !1);
      }
    };
  }
}), g = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
function k(e, t, n, o, s, r) {
  return p(), f("div", m({
    onClick: t[0] || (t[0] = b((...i) => e.onSubmit && e.onSubmit(...i), ["stop"]))
  }, e.attrs, { class: "debounce-async-button" }), [
    v(e.$slots, "default", {
      loading: e.loading,
      disabled: e.disabled
    })
  ], 16);
}
const a = /* @__PURE__ */ g(y, [["render", k]]), $ = {
  install(e) {
    e.component(a.name, a);
  }
};
export {
  $ as default
};
