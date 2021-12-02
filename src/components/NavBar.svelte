<script>
    import {getContext} from "svelte";

    const { activePageStore } = getContext("page");
    const { activeSectionStore } = getContext("section");
    const { answerValid } = getContext("answers");

    const TITLE = "nav-bar-title";
    const TITLE_SELECTED = "nav-bar-title-selected";
    const LINE = "nav-bar-line";
    const LINE_DONE = "nav-bar-line-done";
    const LINE_SELECTED = "nav-bar-line-selected";
</script>

<style>
    .nav-bar-content {
        margin-top: 128px;
    }

    .nav-bar-title {
        font: normal normal bold 20px/29px noto-sans-cjk-kr;
        letter-spacing: 0;
        padding: 0 0 0 52px;

        color: #000000;
        opacity: 1;
        text-align: left;
    }

    .nav-bar-title-selected {
        color: #348AFD;
    }

    .nav-bar-line-wrapper {
        padding-left: 32px;
        margin-left: 52px;

        width: 222px;
        height: 56px;

        box-sizing: border-box;

        display: flex;
        align-items: center;
    }

    .nav-bar-line-wrapper-selected {
        background: #FDFDFA 0 0 no-repeat padding-box;
        border-radius: 10px 0 0 10px;
        opacity: 1;
    }

    .nav-bar-line {
        margin: 0;
        padding: 0;
        width: 100%;
        height: fit-content;
        box-sizing: border-box;

        text-align: left;
        font: normal normal normal 20px/29px noto-sans-cjk-kr;
        letter-spacing: 0;
        color: #000000;
        opacity: 1;
    }

    .nav-bar-line-done:after {
        content: "\2714";
        float: right;
        margin-right: 32px;
    }
</style>

<div class="nav-bar-content">
    <p class="{TITLE} {$activeSectionStore === 0 ? TITLE_SELECTED : ''}">진정인 정보</p>
    {#if $activeSectionStore === 0 && $activePageStore < 6}
        <div class="nav-bar-line-wrapper {$activePageStore === 0 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['00'] ? LINE_DONE : ''}">성명</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 1 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['01'] ? LINE_DONE : ''}">주민등록번호</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 2 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['020'] && $answerValid['021'] ? LINE_DONE : ''}">주소</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 3 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['03'] ? LINE_DONE : ''}">전화번호</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 4 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['04'] ? LINE_DONE : ''}">이메일</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 5 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['05'] ? LINE_DONE : ''}">수신여부확인</p>
        </div>
    {/if}
    <p class="{TITLE} {$activeSectionStore === 1 ? TITLE_SELECTED : ''}">피진정인 정보</p>
    {#if $activeSectionStore === 1 && $activePageStore < 7}
        <div class="nav-bar-line-wrapper {$activePageStore === 0 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['10'] ? LINE_DONE : ''}">성명</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 1 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['11'] ? LINE_DONE : ''}">개인 연락처</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 2 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['12'] ? LINE_DONE : ''}">회사명</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 3 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['13'] ? LINE_DONE : ''}">사업체 구분</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 4 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['140'] && $answerValid['141'] ? LINE_DONE : ''}">회사 주소</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 5 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['15'] ? LINE_DONE : ''}">회사 연락처</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 5 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['15'] ? LINE_DONE : ''}">근로자 수</p>
        </div>
    {/if}
    <p class="{TITLE} {$activeSectionStore === 2 ? TITLE_SELECTED : ''}">진정 내용</p>
    {#if $activeSectionStore === 2 && $activePageStore < 8}
        <div class="nav-bar-line-wrapper {$activePageStore === 0 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['200'] && $answerValid['201'] && $answerValid['202'] ? LINE_DONE : ''}">입사일</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 1 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['21'] ? LINE_DONE : ''}">퇴직 여부</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 2 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['220'] && $answerValid['221'] && $answerValid['222'] ? LINE_DONE : ''}">퇴사일</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 3 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['23'] ? LINE_DONE : ''}">체불임금액</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 4 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['24'] ? LINE_DONE : ''}">임금지급일</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 5 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['25'] ? LINE_DONE : ''}">업무내용</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 6 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['26'] ? LINE_DONE : ''}">근로계약 방법</p>
        </div>
        <div class="nav-bar-line-wrapper {$activePageStore === 7 ? 'nav-bar-line-wrapper-selected' : ''}">
            <p class="{LINE} {$answerValid['27'] ? LINE_DONE : ''}">진정서 본문</p>
        </div>
    {/if}
</div>