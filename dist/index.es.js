import { defineComponent as u, useSlots as c, ref as i } from "vue";
const a = u({
  name: "DebounceAsyncButton",
  abstract: !0,
  setup() {
    const n = c();
    let t = n.default ? n.default()[0] : null;
    if (!t)
      return;
    let e = t.props, o = e == null ? void 0 : e.onClick;
    const l = i(!1);
    return e && e.onClick && (e.onClick = async (s) => {
      l.value || (l.value = !0, await o(s), l.value = !1);
    }), () => t;
  }
}), f = {
  install(n) {
    n.component(a.name, a);
  }
};
export {
  f as default
};
