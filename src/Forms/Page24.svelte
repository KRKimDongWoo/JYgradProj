<script>
    import NumberInput from "../components/NumberInput.svelte";

    const key = "24"
</script>

<div>
    <h1 class="form-title">임금 지급일은 언제입니까?</h1>
    <div class="form-group-vertical">
        <NumberInput label="일" title="매달" answerKey="{key + 0}" placeHolder="25"/>
    </div>
</div>
