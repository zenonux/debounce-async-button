import { defineComponent as i, useAttrs as u, ref as d, computed as f, openBlock as _, createElementBlock as p, mergeProps as m, withModifiers as b, unref as r, renderSlot as v } from "vue";
const h = ["onClick"], k = {
  inheritAttrs: !1
}, o = /* @__PURE__ */ i({
  ...k,
  __name: "DebounceAsyncButton",
  setup(s) {
    let { onClick: a, ...t } = u();
    const e = d(!1), l = f(() => t.hasOwnProperty("disabled") || t.disabled), c = async (n) => {
      !a || l.value || e.value || (e.value = !0, await a(n), e.value = !1);
    };
    return (n, y) => (_(), p("div", m({
      onClick: b(c, ["stop"])
    }, r(t), { class: "debounce-async-button" }), [
      v(n.$slots, "default", {
        loading: e.value,
        disabled: r(l)
      })
    ], 16, h));
  }
});
o.install = function(s) {
  s.component(o.name, o);
};
export {
  o as default
};
