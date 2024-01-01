<script>
  let rows = [
    { items: ['Item 1', 'Item 2', 'Item 3'] },
    { items: ['Item 4', 'Item 5'] },
    { items: ['Item ', 'Item 7', 'Item 8', 'Item 9'] },
    // Add more rows with different numbers of columns as needed
  ];
</script>

<style>
  .grid {
    /* gap: 10px; */
  }

  .row {
    display: flex;
    width: 100%;
    /* flex: 1 0 calc(33.33% - 10px); */
    /* gap: 10px; */
  }

  .column {
    flex: 1;
    /* background-color: lightblue; */
    padding: 1em;
    border: 1px solid #ccc;
    /* border-radius: 1em; */
  }
</style>

<div class="grid">
  {#each rows as { items }, rowIndex (items)}
    <div class="row" key={rowIndex}>
      {#each items as column (column)}
        <div class="column" key={column}>{column}</div>
      {/each}
    </div>
  {/each}
</div>
