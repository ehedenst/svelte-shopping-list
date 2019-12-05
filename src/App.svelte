<script>
  let showDialog = false;
  let newItemName = '';
  let newItemMin = '1';
  let newItemMax = '1';

  let items = [];

  const closeDialog = async () => {
    showDialog = false;
    newItemName = '';
    newItemMin = '1';
    newItemMax = '1';
  };

  const addItem = async () => {
    const newItem = {
      name: newItemName,
      min: newItemMin,
      max: newItemMax,
      current: 0,
      createdAt: new Date().toISOString()
    };
    items = items.concat([newItem]);
    closeDialog();
  };

  const removeItem = async event => {
    const { item } = event.detail;
    items = items.filter(i => i !== item);
  };
</script>

<style>
  main {
    max-width: 480px;
    margin: 0 auto;
    border: 1px solid blue;
  }

  @media (max-width: 479px) {
    main {
      border: 1px solid red;
      max-width: none;
    }
  }
</style>

<main>
  <ul>
    {#each items as item}
      <p>{item.name}</p>
    {/each}
  </ul>
</main>

<div class="absolute bottom-0 right-0">
  <button on:click={() => (showDialog = true)}>Add</button>
</div>
