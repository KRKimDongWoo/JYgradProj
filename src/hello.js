import Hello from "./Hello.svelte";

const hello = new Hello({
    target: document.body,
    props: {
        name: "Hello",
    },
});

export default hello;
