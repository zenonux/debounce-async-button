import { defineComponent as s, useSlots as c, ref as u } from "vue";
const a = s({
  name: "DebounceAsyncButton",
  abstract: !0,
  render() {
    const n = c();
    let t = n.default ? n.default()[0] : null;
    if (!t)
      return;
    let e = t.props, o = e == null ? void 0 : e.onClick;
    const l = u(!1);
    return e && e.onClick && (e.onClick = async (r) => {
      l.value || (l.value = !0, await o(r), l.value = !1);
    }), t;
  }
}), f = {
  install(n) {
    n.component(a.name, a);
  }
};
export {
  f as default
};
