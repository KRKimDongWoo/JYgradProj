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
  import Page17 from "./Forms/Page17.svelte";
  import Page11 from "./Forms/Page11.svelte";
  import Page12 from "./Forms/Page12.svelte";
  import Page13 from "./Forms/Page13.svelte";
  import Page14 from "./Forms/Page14.svelte";
  import Page15 from "./Forms/Page15.svelte";
  import Page16 from "./Forms/Page16.svelte";
  import Page27 from "./Forms/Page27.svelte";
  import Page26 from "./Forms/Page26.svelte";
  import Page25 from "./Forms/Page25.svelte";
  import Page24 from "./Forms/Page24.svelte";
  import Page23 from "./Forms/Page23.svelte";
  import Page22 from "./Forms/Page22.svelte";
  import Page21 from "./Forms/Page21.svelte";
  import Page20 from "./Forms/Page20.svelte";
  import Page28 from "./Forms/Page28.svelte";
  import Page30 from "./Forms/Page30.svelte";
  import Page40 from "./Forms/Page40.svelte";
  import NavBar from "./components/NavBar.svelte";

  let showPopup = false;
  let fixPopup = false;

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
    position: fixed;
    left: 0;
    top: 0;

    width: 273px;
    height: 100%;
    background: #D4E7FF 0 0 no-repeat padding-box;
    opacity: 1;
  }

  .help-link-wrapper {
    position: absolute;
    bottom: 44px;
    left: 52px;

    width: 180px;
    height: 29px;
  }

  .help-link {
    margin: 0;
    width: 100%;
    height: 100%;

    text-align: left;
    font: normal normal 500 20px/20px noto-sans-cjk-kr;
    letter-spacing: 0;
    color: #000000;
    opacity: 1;
  }

  .help-link-box {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .help-link-box {

  }
  .help-link-popup {
    position: absolute;
    left: calc(100% + 26px);
    bottom: -12px;

    width: 728px;
    height: 926px;

    background: #3C3C3C 0 0 no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;

    z-index: 1;
  }

  .help-link-popup-close {
    position: absolute;
    top: 32px;
    right: 40px;
    font: normal normal 500 24px/24px noto-sans-cjk-kr;
    color: #FFFFFF;
  }

  .help-link-popup-title {
    margin: 56px 80px;
    text-align: left;
    font: normal normal 500 24px/42px noto-sans-cjk-kr;
    letter-spacing: 0;
    color: #FFFFFF;
    opacity: 1;
  }

  .help-link-popup-table {
    margin: 0 80px;
    width: calc(100% - 160px);
    border-collapse: collapse;
  }

  .help-link-popup-tr {
    border-bottom: 1px solid #707070;
    border-top: 1px solid #707070;
  }

  .help-link-popup-td {
    padding: 24px 0;

    text-align: left;
    font: normal normal 500 20px/32px noto-sans-cjk-kr;
    letter-spacing: 0;
    color: #FFFFFF;
    opacity: 1;
  }

  .help-link-popup-td-1 {
    width: 222px;
    padding-right: 100px;
  }

  .help-link-popup-triangle {
    position: absolute;
    left: calc(100% + 10px);
    bottom: 12px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 16px solid #3c3c3c;
  }

</style>

<main>
  <ScrollFormContainer>
    <nav class="nav-bar">
      <a href="/index.html" class="back-link">&#x1449 임금체불진정서</a>
      <NavBar/>
      <div class="help-link-wrapper">
        <div class="help-link-box">
          <p class="help-link" on:mouseover={() => {showPopup=true}} on:mouseout={() => {showPopup=false}} on:click={() => {fixPopup=true}}> 도움이 필요하신가요?</p>
          {#if showPopup || fixPopup}
          <span class="help-link-popup-triangle"></span>
          <div class="help-link-popup">
            <p class="help-link-popup-title">도움이 필요하시다면, 평일 09:00 - 18:00<br>내로 언제든지 연락주세요. 수신료는 유료이며,<br>발신자가 부담합니다.</p>
            <span class="help-link-popup-close" on:click={() =>{fixPopup=false}}>&#x2715</span>
            <table class="help-link-popup-table">
              <tr class="help-link-popup-tr">
                <td class="help-link-popup-td help-link-popup-td-1">임금체불 등 고용노동분야 내용 상담</td>
                <td class="help-link-popup-td help-link-popup-td-2">1350</td>
              </tr>
              <tr class="help-link-popup-tr">
                <td class="help-link-popup-td help-link-popup-td-1">나의 민원 처리 상태 확인</td>
                <td class="help-link-popup-td help-link-popup-td-2">1350 (ARS 연결 후 4번)</td>
              </tr>
              <tr class="help-link-popup-tr">
                <td class="help-link-popup-td help-link-popup-td-1">사용중 전산 장애 발생시</td>
                <td class="help-link-popup-td help-link-popup-td-2">044 - 202 - 7116</td>
              </tr>
              <tr class="help-link-popup-tr">
                <td class="help-link-popup-td help-link-popup-td-1">공동인증서 로그인시 비밀번호가 일치하지 않는다는 메세지가 뜨는 경우</td>
                <td class="help-link-popup-td help-link-popup-td-2">1566 - 0771</td>
              </tr>
              <tr class="help-link-popup-tr">
                <td class="help-link-popup-td help-link-popup-td-1">키보드 입력이 정상적으로 되지 않는 경우</td>
                <td class="help-link-popup-td help-link-popup-td-2">1566 - 0771</td>
              </tr>
              <tr class="help-link-popup-tr">
                <td class="help-link-popup-td help-link-popup-td-1">공동인증서 보안 프로그램 설치창이 반복하여 뜰 경우</td>
                <td class="help-link-popup-td help-link-popup-td-2">1644 - 0128</td>
              </tr>
            </table>
          </div>
          {/if}
        </div>
      </div>
    </nav>
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
    <ScrollformFullpage section={"commission"} page={"name"}>
      <Page10/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commission"} page={"contact"}>
      <Page11/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commission"} page={"firm-name"}>
      <Page12/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commission"} page={"firm-type"}>
      <Page13/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commission"} page={"firm-addr"}>
      <Page14/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commission"} page={"firm-contact"}>
      <Page15/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"commission"} page={"employees"}>
      <Page16/>
    </ScrollformFullpage>
    <ScrollformScrollpage section={"commission"} page={"review"}>
      <Page17/>
    </ScrollformScrollpage>
    <ScrollformFullpage section={"paper"} page={"joined-day"}>
      <Page20/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"paper"} page={"retired"}>
      <Page21/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"paper"} page={"retired-day"}>
      <Page22/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"paper"} page={"payed"}>
      <Page23/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"paper"} page={"payday"}>
      <Page24/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"paper"} page={"work"}>
      <Page25/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"paper"} page={"contract"}>
      <Page26/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"paper"} page={"reason"}>
      <Page27/>
    </ScrollformFullpage>
    <ScrollformScrollpage section={"paper"} page={"reason"}>
      <Page28/>
    </ScrollformScrollpage>
    <ScrollformFullpage section={"check"} page={"main"}>
      <Page30/>
    </ScrollformFullpage>
    <ScrollformFullpage section={"return"} page={"main"}>
      <Page40/>
    </ScrollformFullpage>
  </ScrollFormContainer>
</main>