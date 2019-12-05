<script>
  import { createEventDispatcher } from 'svelte';
  import { Slider, Button, Chip } from 'smelte';
  import { longpress } from './actions.js';

  const dispatch = createEventDispatcher();

  function remove() {
    dispatch('remove', { item });
  }

  export let item;
</script>

<li class="flex flex-row bg-gray-200" use:longpress on:longpress={remove}>
  <span class="flex-grow">{item.name}</span>
  <Button icon="remove" text light flat />
  {item.current}
  <Button icon="add" text light flat />
</li>
