import { defineComponent as a, useSlots as i, ref as l, useAttrs as c, computed as d, openBlock as f, createElementBlock as b, mergeProps as p, withModifiers as m, renderSlot as v } from "vue";
const B = a({
  name: "DebounceAsyncAbstractButton",
  abstract: !0,
  setup() {
    const e = i();
    let n = e.default ? e.default()[0] : null;
    if (!n)
      return;
    let t = n.props, o = t == null ? void 0 : t.onClick;
    const s = l(!1);
    return t && t.onClick && (t.onClick = async (r) => {
      s.value || (s.value = !0, await o(r), s.value = !1);
    }), () => n;
  }
}), k = a({
  name: "DebounceAsyncButton",
  inheritAttrs: !1,
  setup() {
    let { onClick: e, ...n } = c();
    const t = l(!1), o = d(() => n.hasOwnProperty("disabled") || n.disabled);
    return {
      attrs: n,
      loading: t,
      disabled: o,
      onSubmit: async (r) => {
        !e || o.value || t.value || (t.value = !0, await e(r), t.value = !1);
      }
    };
  }
}), y = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, s] of n)
    t[o] = s;
  return t;
};
function A(e, n, t, o, s, r) {
  return f(), b("div", p(e.attrs, {
    onClick: n[0] || (n[0] = m((...u) => e.onSubmit && e.onSubmit(...u), ["stop"]))
  }), [
    v(e.$slots, "default", {
      loading: e.loading,
      disabled: e.disabled
    })
  ], 16);
}
const C = /* @__PURE__ */ y(k, [["render", A]]);
export {
  B as DebounceAsyncAbstractButton,
  C as DebounceAsyncButton
};
