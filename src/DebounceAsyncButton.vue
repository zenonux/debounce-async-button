<script lang="ts">
import { useSlots, ref, defineComponent } from "vue";
export default defineComponent({
  name: "DebounceAsyncButton",
  abstract: true,
  render() {
    const slots = useSlots();
    let vnode = slots.default ? slots.default()[0] : null;
    if (!vnode) {
      return;
    }
    let props = vnode.props;
    let clickHandler = props?.onClick;
    const loading = ref(false);
    if (props && props.onClick) {
      props.onClick = async (e: Event) => {
        if (loading.value) {
          return;
        }
        loading.value = true;
        await clickHandler(e);
        loading.value = false;
      };
    }
    return vnode;
  },
});
</script>
