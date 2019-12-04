<script>
  import { Dialog, TextField, Button } from 'smelte';
  import Item from './Item.svelte';

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

<Dialog bind:value={showDialog}>
  <h5 slot="title">Add Item</h5>
  <div>
    <TextField label="Name" type="text" bind:value={newItemName} />
    <TextField label="Minimum " type="number" bind:value={newItemMin} />
    <TextField label="Maximum" type="number" bind:value={newItemMax} />
  </div>
  <div slot="actions">
    <Button color="secondary" text on:click={closeDialog}>Cancel</Button>
    <Button color="primary" text on:click={addItem}>OK</Button>
  </div>
</Dialog>

<main>
  <ul>
    {#each items as item}
      <Item {item} on:remove={removeItem} />
    {/each}
  </ul>
</main>

<div class="absolute bottom-0 right-0">
  <Button icon="add" on:click={() => (showDialog = true)} />
</div>
