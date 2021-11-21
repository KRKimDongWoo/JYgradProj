import ScrollForm from "./ScrollForm.svelte";

const app = new ScrollForm({
  target: document.body,
  props: {
    name: "ScrollForm",
  },
});

export default app;
