(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.DebounceAsyncButton=n(e.Vue))})(this,function(e){"use strict";const n=e.defineComponent({name:"DebounceAsyncAbstractButton",abstract:!0,render(){const o=e.useSlots();let i=o.default?o.default()[0]:null;if(!i)return;let t=i.props,s=t==null?void 0:t.onClick;const u=e.ref(!1);return t&&t.onClick&&(t.onClick=async l=>{u.value||(u.value=!0,await s(l),u.value=!1)}),i}});return{install(o){o.component(n.name,n)}}});
