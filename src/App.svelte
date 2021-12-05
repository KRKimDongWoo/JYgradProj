<script>
  import Chip from "./components/chip";

  let searched = false;
  let fullPage = false;

  function onClickSearch(e) {
    e.preventDefault();
    searched = true;
    setAsFullPage(false);
  }

  function setAsFullPage(set) {
    fullPage = set;
    const mainDiv = document.getElementById("index-main");
    const governDiv = document.getElementById("index-govern");
    if (fullPage) {
      mainDiv.style.overflow = 'hidden';
      mainDiv.style.height = '100%';
    } else {
      mainDiv.style.overflow = 'auto';
      mainDiv.style.height = 'fit-content';
    }
  }

  function toHelloPage(e) {
    window.location="/hello.html";
  }

  const quickSearch = [
    "근로기준",
    "퇴직연금규약",
    "대지급금",
    "직장내성희롱교육",
    "출산휴가",
    "근로시간연장인가",
    "산업재해인정",
    "근로자 파견",
    "퇴직금",
    "근로복지기금",
    "고용보험",
    "고용보험자격",
    "중소기업지원금",
  ]

  const searchResults = [
    { name: "임금체불진정서", big: "근로기준", small: "임금" },
    { name: "대지급금 등 확인신청서", big: "근로기준", small: "임금채권보장" },
    { name: "감시적, 단속적 근로종사자에 대한 적용제외 승인신청서", big: "근로기준", small: "감시/단속적 근로" },
    { name: "체불 임금 등 · 사업주 확인서 발급신청서", big: "근로기준", small: "임금" },
    { name: "근로시간 연장인가", big: "근로기준", small: "근로시간" },
    { name: "확정급여형 퇴직연금규약 신규신고서", big: "근로기준", small: "퇴직연금" },
    { name: "근로자파견사업 갱신 허가신청서", big: "근로기준", small: "고용차별개선" },
    { name: "취업규칙신고서", big: "근로기준", small: "취업규칙" },
  ]

</script>

<style>
  main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;

    background: #3C3C3C;
  }

  .index-govern {
    position: relative;
    margin-bottom: 29px;
    top: 29px;
    left: 152px;

    width: 136px;
    height: 35px;
    background: none;
  }

  .index-content-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
  }

  .index-title {
    margin: 0 0 132px 0;

    width: 509px;
    height: 155px;

    text-align: left;

    font: normal normal 900 48px/84px noto-sans-cjk-kr;
    letter-spacing: 0;

    color: #FDFDFA;
    opacity: 1;
  }

  .index-content {
    height: fit-content;
    width: 100%;
    padding: 0 270px;

    box-sizing: border-box;
  }

  .index-form {
    width: 100%;
    height: 118px;
    max-width: 1416px;

    display: flex;
    justify-content: center;
  }

  .index-input {
    margin: 0 24px 0 0;

    width: 100%;
    height: 118px;

    flex-grow: 1;

    background: #3C3C3C 0 0 no-repeat padding-box;
    border: 4px solid #CDCDCD;
    border-radius: 10px;
    opacity: 1;
    font: normal normal 500 42px/72px noto-sans-cjk-kr;

    text-align: left;
    letter-spacing: 6px;
    color: #CDCDCD;
  }

  .index-input:hover {
    border: 4px solid #F7F7F7;
    color: #F7F7F7;
  }
  .index-input:focus {
    border: 4px solid #F7F7F7;
    color: #F7F7F7;
  }

  .search-button {
    position: relative;
    height: 118px;
    width: 118px;

    flex-shrink: 0;
    flex-grow: 0;

    background: #348AFD 0 0 no-repeat padding-box;
    border: none;
    border-radius: 10px;
    opacity: 1;
  }

  .search-button:hover {
    background-color: #579BF8;
  }

  .search-button:active {
    background-color: #186EE0;
  }

  .search-button-circle {
    position: absolute;
    top: 34px;
    left: 36px;
    width: 32px;
    height: 32px;

    border: 4px solid #FFFFFF;
    border-radius: 50%;
    opacity: 1;
  }

  .search-button-stick {
    position: absolute;
    top: 64px;
    left: 74px;

    display: block;
    height: 24px;


    border-left: 4px solid #FFFFFF;
    opacity: 1;

    transform: rotate(135deg);
  }

  .index-subtitle {
    margin: 132px 0 40px 0;
    width: 616px;
    height: 47px;

    font: normal normal 500 32px/84px noto-sans-cjk-kr;
    letter-spacing: 0;

    color: #FDFDFA;
    opacity: 1;
  }

  .index-chip-box {
    display: flex;
    flex-wrap: wrap;
  }

  .index-result-table {
    border-spacing: 0 12px;
    border-collapse: separate;
  }

  .index-result-th {
    text-align: left;

    font: normal normal 500 28px/84px noto-sans-cjk-kr;
    letter-spacing: 0;
    color: #6BAAFF;
    opacity: 1;
  }

  .index-result-tr {
    height: 81px;
    margin: 12px 0;
    background: #FFFFFF07 0 0 no-repeat padding-box;
  }

  .index-result-tr:hover {
    background: #FFFFFF80 0 0 no-repeat padding-box;
  }

  .index-result-td {
    height: 100%;
    text-align: left;

    font: normal normal 500 28px/84px noto-sans-cjk-kr;
    letter-spacing: 0;

    color: #FDFDFA;
    opacity: 1;
  }

  .index-result-td-1 {
    padding-left: 48px;
    width: 100%;
  }

  .index-result-td-2 {
    min-width: 163px;
  }

  .index-result-td-3 {
    min-width: 234px;
  }

  .index-result-td-4 {
    min-width: 204px;
  }

  .index-result-button {
    margin: 0;
    height: 56px;
    width: 156px;

    background: #348AFD 0 0 no-repeat padding-box;
    border: none;

    font: normal normal 500 24px/24px noto-sans-cjk-kr;
    letter-spacing: 0;

    color: #FDFDFA;
    opacity: 1;
  }

  .index-result-pages {
    display: flex;
    height: 66px;
    width: fit-content;

    margin: 152px auto 32px;
  }

  .index-result-page-box {
    width: 66px;
    height: 66px;
    text-align: center;

    color: #FFFFFF;
    font: normal normal 500 30px/87px Noto Sans CJK KR;
    line-height: 66px;

    background: #FFFFFF00 0 0 no-repeat padding-box;
    border: 2px solid #FFFFFF;
    opacity: 1;
  }

  .index-result-page-box_dots {
    width: 116px;
  }

  .index-result-page-box_deselected {
    color: #FFFFFF;
    background: #FFFFFF00 0 0 no-repeat padding-box;
  }

  .index-result-page-box_selected {
    color: #000000;
    background: #FFFFFFFF 0 0 no-repeat padding-box;
  }
</style>

<main class="index-main" id="index-main">
  <img class="index-govern" id="index-govern" src="/img/govern.png" alt="govern">
  <div class="index-content-wrapper">
    <div class="index-content">
      <h1 class="index-title">찾고 싶은 서식과 관련된 단어를 입력해보세요.</h1>
      <form class="index-form">
        <input class="index-input" placeholder="체불 임금"/>
        <button class="search-button" on:click={onClickSearch}>
          <span class="search-button-circle"></span>
          <span class="search-button-stick"></span>
        </button>
      </form>
      {#if !searched}
      <h2 class="index-subtitle">많이 검색하는 키워드입니다.</h2>
      <div class="index-chip-box">
        {#each quickSearch as qs, idx}
          <Chip key="chip-{idx}" onclick={onClickSearch}>{qs}</Chip>
        {/each}
      </div>
      {:else}
        <h2 class="index-subtitle">입력하신 단어에 대한 검색 결과입니다.</h2>
        <table class="index-result-table">
          <thead>
          <tr>
            <th class="index-result-th index-result-td-1">민원서식명</th>
            <th class="index-result-th index-result-td-2">대분류</th>
            <th class="index-result-th index-result-td-3">소분류</th>
            <th class="index-result-th index-result-td-4"></th>
          </tr>
          </thead>
          <tbody>
          {#each searchResults as {name, big, small}, idx}
            <tr class="index-result-tr">
              <td class="index-result-td index-result-td-1">{name}</td>
              <td class="index-result-td index-result-td-2">{big}</td>
              <td class="index-result-td index-result-td-3">{small}</td>
              <td class="index-result-td index-result-td-4">
                <button class="index-result-button" on:click={toHelloPage}>신청하기 ></button>
              </td>
            </tr>
          {/each}
          </tbody>
        </table>
        <div class="index-result-pages">
          <span class="index-result-page-box index-result-page-box_selected">1</span>
          <span class="index-result-page-box index-result-page-box_deselected">2</span>
          <span class="index-result-page-box index-result-page-box_deselected">3</span>
          <span class="index-result-page-box index-result-page-box_deselected">4</span>
          <span class="index-result-page-box index-result-page-box_deselected">5</span>
          <span class="index-result-page-box index-result-page-box_deselected">6</span>
          <span class="index-result-page-box index-result-page-box_dots">...</span>
          <span class="index-result-page-box index-result-page-box_deselected">12</span>
        </div>
      {/if}
    </div>
  </div>
</main>
