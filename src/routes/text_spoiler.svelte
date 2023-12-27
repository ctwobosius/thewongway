<script lang="ts">
  export let content = "Spoiler 2";

  export let isVisible = false;
  const toggleSpoiler = () => {
    isVisible = !isVisible;
  };
</script>

<style>
  .spoiler {
    color: transparent;
    text-shadow: 0 0 5px black;
    cursor: pointer;
  }

  .spoiler.visible {
    color: initial;
    text-shadow: none;
  }
</style>

<div on:click={() => toggleSpoiler()} class:visible={isVisible} class="spoiler">
  {@html content}
</div>
