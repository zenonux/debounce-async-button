import { defineComponent as u, useAttrs as i, ref as d, computed as f, openBlock as _, createElementBlock as p, mergeProps as m, withModifiers as b, unref as l, renderSlot as v } from "vue";
const h = ["onClick"], k = {
  inheritAttrs: !1
}, r = /* @__PURE__ */ u({
  ...k,
  __name: "DebounceAsyncButton",
  setup(o) {
    let { onClick: s, ...t } = i();
    const e = d(!1), a = f(() => t.hasOwnProperty("disabled") || t.disabled), c = async (n) => {
      !s || a.value || e.value || (e.value = !0, await s(n), e.value = !1);
    };
    return (n, y) => (_(), p("div", m({
      onClick: b(c, ["stop"])
    }, l(t), { class: "debounce-async-button" }), [
      v(n.$slots, "default", {
        loading: e.value,
        disabled: l(a)
      })
    ], 16, h));
  }
});
r.install = function(o) {
  o.component("DebounceAsyncButton", r);
};
export {
  r as default
};
