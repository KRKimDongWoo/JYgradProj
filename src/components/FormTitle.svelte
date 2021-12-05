
<script>
  export let dataTooltip;
  let tooltip = false;
  let h;

  const onMouseOver = () => {
    tooltip = true;
    const marks = h.getElementsByClassName('tooltip-mark');
    for (let i = 0; i < marks.length; i++) {
      marks[i].classList.add('tooltip-mark-enabled');
    }
  }

  const onMouseOut = () => {
    tooltip = false;
    const marks = h.getElementsByClassName('tooltip-mark');
    for (let i = 0; i < marks.length; i++) {
      marks[i].classList.remove('tooltip-mark-enabled');
    }
  }
</script>


<h1 class="form-title" on:mouseover={onMouseOver} on:mouseout={onMouseOut} bind:this={h}
    data-tooltip="{dataTooltip}"
>
    <slot></slot>
</h1>