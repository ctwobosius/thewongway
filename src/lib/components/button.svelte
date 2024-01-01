<style lang="postcss">
  .button {
  text-decoration: none;
  background: rgb(145, 92, 182);
  padding: 15px 40px;
  border-radius: 4px;
  font-weight: normal;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  animation: gradient 5s ease infinite;
}


	@keyframes gradient {
		0%, 100% {
			box-shadow: 0 5px 50px rgba(145, 92, 182, .4);
		}
		50% {
			box-shadow: 0 5px 0px rgba(145, 92, 182, .4);
		}
	}

.button:hover {
  box-shadow: 0 5px 25px rgba(145, 92, 182, .4);
}

</style>

<button class="button" >Button</button>
