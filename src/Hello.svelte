<script>
    function toIndexPage(e) {
        window.location="/index.html";
    }

    function toFormPage(e) {
        window.location="/scrollForm.html";
    }

    const infos = [
        {"title": "신청자격", "desc": "누구나 신청 가능합니다."},
        {"title": "처리기간", "desc": "접수 다음날부터<br>25일 소요됩니다."},
        {"title": "구비서류", "desc": "따로 필요하지 않습니다."},
        {"title": "수수료", "desc": "없습니다."}
    ]

</script>

<style>
    main {
        width: 100%;
        height: 100%;
        overflow: auto;

        background: #D4E7FF;
        position: relative;
    }


    .hello-contents {
        margin: 132px 0 132px 435px;
    }

    .hello-title {
        text-align: left;
        font: normal normal 900 48px/84px noto-sans-cjk-kr;
        letter-spacing: 0;
        color: #000000;

        white-space: pre-line;
    }

    .hello-title-highlight {
        font: normal normal 900 48px/84px noto-sans-cjk-kr;
        letter-spacing: 0;
        color: #348AFD;
        background-color: #FFFFFF00;
    }

    .hello-info-boxes {
        display: flex;
        margin: 16px 0;
    }

    .hello-info-box {
        position: relative;

        margin: 0 16px 0 0;
        height: 321px;
        width: 321px;

        flex-shrink: 0;
        flex-grow: 0;

        background: #FFFFFF 0 0 no-repeat padding-box;
        box-shadow: 0 7px 24px #00000014;
        opacity: 1;
    }

    .hello-info-box-img {
        position: absolute;
        top: 40px;
        left: 28px;

        height: 67px;
        width: 85px;
        background-color: #3C3C3C;
    }

    .hello-info-box-title {
        margin: 0;

        position: absolute;
        bottom: 146px;
        left: 40px;
        right: 38px;
        height: fit-content;

        text-align: left;
        font: normal normal 300 32px/72px noto-sans-cjk-kr;
        letter-spacing: 0;
        color: #000000;
        opacity: 1;
    }

    .hello-info-box-desc {
        height: fit-content;

        margin: 0;

        text-align: left;
        font: normal normal 500 24px/36px noto-sans-cjk-kr;
        letter-spacing: 0;
        color: #000000;
        opacity: 1;

    }

    .hello-info-box-desc-wrapper {
        position: absolute;
        bottom: 46px;
        left: 40px;
        right: 38px;

        height: 72px;

        display: flex;
        align-items: flex-end;
    }

    .hello-info-box-big {
        margin: 16px 0;
        padding: 52px 40px;
        width: 1333px;
        height: 504px;

        box-sizing: border-box;

        background: #FFFFFF 0 0 no-repeat padding-box;
        box-shadow: 0 7px 24px #00000014;
        opacity: 1;
    }

    .hello-info-box-td-1 {
        width: 218px;

        text-align: left;
        font: normal normal bold 24px/44px Noto Sans CJK KR;
        letter-spacing: 0;
        color: #000000;
        opacity: 1;
    }

    .hello-info-box-td-2 {
        width: 780px;
        text-align: left;
        font: normal normal 500 24px/44px Noto Sans CJK KR;
        letter-spacing: 0;
        color: #000000;
        opacity: 1;
    }

    .hello-buttons {
        margin-top: 43px;
        margin-bottom: 163px;

        display: flex;
    }

    .hello-button-back {
        margin-right: 60px;

        flex-grow: 0;
        flex-shrink: 0;
        width: 356px;
        height: 158px;

        border: 3px solid #348AFD;
        border-radius: 10px;
        opacity: 1;

        text-align: center;
        font: normal normal 500 36px/36px Noto Sans CJK KR;
        letter-spacing: 0;
        color: #348AFD;
    }

    .hello-button-check {
        flex-grow: 0;
        flex-shrink: 0;
        width: 917px;
        height: 158px;

        background: #348AFD 0 0 no-repeat padding-box;
        border-radius: 10px;
        opacity: 1;

        text-align: center;
        font: normal normal 500 36px/36px Noto Sans CJK KR;
        letter-spacing: 0;
        color: #FFFFFF;
    }

</style>

<main>
    <a href="/index.html" class="back-link">&#x1449 임금체불진정서</a>
    <div class="hello-contents"><h1 class="hello-title">안녕하세요.<br><mark class="hello-title-highlight">임금체불진정서</mark> 접수를 시작합니다.</h1>    <div class="hello-info-boxes">
        {#each infos as {title, desc}}
            <div class="hello-info-box">
                <img class="hello-info-box-img">
                <p class="hello-info-box-title">{title}</p>
                <div class="hello-info-box-desc-wrapper">
                    <p class="hello-info-box-desc">{@html desc}</p>
                </div>
            </div>
        {/each}
    </div>
        <div class="hello-info-box-big">
            <table class="hello-info-box-table">
                <tr class="hello-info-box-tr">
                    <td class="hello-info-box-td-1">접수기관</td>
                    <td class="hello-info-box-td-2">피진정인 사업장 소재지와 같은 구역의 지방고용노동관서</td>
                </tr>
                <tr>
                    <td class="hello-info-box-td-1">처리기관</td>
                    <td class="hello-info-box-td-2">피진정인 사업장 소재지와 같은 구역의 지방고용노동관서</td>
                </tr>
                <tr>
                    <td class="hello-info-box-td-1">담당부서</td>
                    <td class="hello-info-box-td-2">근로기준정책과</td>
                </tr>
                <tr>
                    <td class="hello-info-box-td-1">&#x2800</td>
                    <td class="hello-info-box-td-2">&#x2800</td>
                </tr>
                <tr>
                    <td class="hello-info-box-td-1">관련법령</td>
                    <td class="hello-info-box-td-2">근로기준법 제104조 제1항</td>
                </tr>
            </table>
        </div>
        <div class="hello-buttons">
            <button class="hello-button-back" on:click={toIndexPage}>&#x1449&#x2800목록으로</button>
            <button class="hello-button-check" on:click={toFormPage}>&#x2713&#x2800&#x2800확인했습니다. 다음 단계로 넘어갑니다.</button>
        </div>
    </div>
</main>
