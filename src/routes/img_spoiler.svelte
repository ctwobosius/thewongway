<!-- ImageSpoilerComponent.svelte -->
<script lang="ts">
  export let src: string;
  export let alt: string;
  export let isVisible: boolean;

  export let width = "3em";
  export let height = "3em";
  export let divWidth = "16em";
  export let divHeight = "5.5em";

  export let buttonMsg = "No Scam Button";

  const toggleSpoiler = () => {
    isVisible = !isVisible;
  };
</script>

<style>
  img {
    object-fit: cover;
  }

  .image-spoiler {
    filter: blur(13px) grayscale(100%);
		color: #FFF;
  }

  .image-spoiler.visible {
    filter: blur(0);
    transition: 0.5s;
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    width: 100%;
    height: 100%;
    position:absolute;
    top: 0;
		bottom: 0;
		left: 0;
		right: 0;
    color:white;
    background-color: rgb(57, 46, 34);
    border-radius: 1.5em;
    border: 8px solid rgb(128, 86, 57);
    padding: 0.5em;
    animation: gradient 0.5s ease infinite;
    font-size:xx-large;
    font-weight: bold;
    text-shadow:
      3px 3px 0 #000,
      -3px 3px 0 #000,
      -3px -3px 0 #000,
      3px -3px 0 #000;
}

	@keyframes gradient {
		0%, 100% {
			box-shadow: 0 0 50px rgb(255, 156, 8);
		}
		50% {
			box-shadow: 0 0 0px rgba(255, 232, 114, 0.4);
		}
	}

  button:hover {
    background-color: #47332bae;
  }

  button.visible {
    display: none;
  }

  .hover {
    cursor: not-allowed;
    border-radius: 1.5em;
    border: 1px solid rgb(128, 86, 57);
  }
  .hover:hover img {
    animation: flashing 4s linear infinite, spinning 120s linear infinite;
  }

  @keyframes flashing {
		0% {
      scale: 10;
		}
		50% {
      scale: 6;
		}
    100% {
      scale: 10;
		}
	}
  @keyframes spinning {
		0% {
			transform: rotate(-10deg);
		}
		50% {
			transform: rotate(350deg);
		}
    100% {
			transform: rotate(710deg);
		}
	}

  .hover img {
    scale: 1;
  }
</style>

<div style="width:{divWidth}; height:{divHeight};" class:hover={isVisible}>
  <img class:visible={isVisible} style="max-width:{width}; max-height:{height};" class:width={width} class:height={height} class="no-prose image-spoiler" src={src} alt={alt}>
  <button on:click={toggleSpoiler} class:visible={isVisible}>{buttonMsg}</button>
</div>

