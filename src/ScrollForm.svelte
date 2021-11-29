<script>
  import ScrollFormContainer from "./ScrollView/ScrollFormContainer.svelte";
  import ScrollformFullpage from "./ScrollView/ScrollformFullpage.svelte";
  import ScrollformScrollpage from "./ScrollView/ScrollformScrollpage.svelte";
  import {writable} from "svelte/store";
  import {setContext} from "svelte";
  import Page00 from "./Forms/Page00.svelte";
  import Page01 from "./Forms/Page01.svelte";
  import Page02 from "./Forms/Page02.svelte";
  import Page04 from "./Forms/Page04.svelte";
  import Page03 from "./Forms/Page03.svelte";
  import Page05 from "./Forms/Page05.svelte";
  import Page06 from "./Forms/Page06.svelte";
  import Page10 from "./Forms/Page10.svelte";

  const answerStore = writable({});
  const answerValid = writable({});
  setContext("answers", {
    answerStore: answerStore,
    answerValid: answerValid
  });


</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  .nav-bar {
    position: absolute;
    left: 0;
    top: 0;

    width: 273px;
    height: 100%;
    background: #D4E7FF 0 0 no-repeat padding-box;
    opacity: 1;
  }
</style>

<main>
  <nav class="nav-bar">
    <a href="/index.html" class="back-link">&#x1449 임금체불진정서</a>
    <div class="nav-bar-contents">

    </div>
  </nav>
  <ScrollFormContainer>
    <ScrollformFullpage section={"commissioner"} page={"name"}>
      <Page00/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commissioner"} page={"id-num"}>
      <Page01/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commissioner"} page={"address"}>
      <Page02/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commissioner"} page={"phone-num"}>
      <Page03/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commissioner"} page={"email"}>
      <Page04/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commissioner"} page={"check"}>
      <Page05/>
    </ScrollformFullpage>
    <ScrollformScrollpage section={"commissioner"} page={"review"}>
      <Page06/>
    </ScrollformScrollpage>
    <ScrollformScrollpage section={"commission"} page={"name"}>
      <Page10/>
    </ScrollformScrollpage>
  </ScrollFormContainer>
</main>