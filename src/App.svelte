<script lang="ts">
  import Item from './Item.svelte'

  export let title: string
  export let data: QA[]

  let selectedItem: number
</script>

<div class="faq">
  {#if title}
    <h2>{title}</h2>
  {/if}
  <section>
    {#each data as item, index}
      <Item {item} bind:selectedItem {index} />
    {/each}
  </section>
</div>

<style lang="scss">
  $size: 2;

  .faq {
    section {
      display: flex;
      flex-direction: column;
      gap: $size + rem;
      margin-bottom: $size + rem;
    }
    h2 {
      font-size: $size + rem;
      line-height: $size * 1em;
    }
  }
</style>
