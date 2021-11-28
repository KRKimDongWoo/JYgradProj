<script>
  import ScrollFormContainer from "./ScrollView/ScrollFormContainer.svelte";
  import ScrollformFullpage from "./ScrollView/ScrollformFullpage.svelte";
  import ScrollformScrollpage from "./ScrollView/ScrollformScrollpage.svelte";
  import {writable} from "svelte/store";
  import {setContext} from "svelte";
  import Page00 from "./Forms/Page00.svelte";
  import Page01 from "./Forms/Page01.svelte";

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
      <h1>Page 3</h1>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commissioner"} page={"phone-num"}>
      <h1>Page 4</h1>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commissioner"} page={"email"}>
      <h1>Page 5</h1>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commissioner"} page={"check"}>
      <h1>Page 6</h1>
    </ScrollformFullpage>
    <ScrollformScrollpage section={"commissioner"} page={"review"}>
      <h1>Page end</h1>
    </ScrollformScrollpage>
  </ScrollFormContainer>
</main>