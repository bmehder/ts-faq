<script lang="ts">
  import Item from './Item.svelte'

  export let title: string
  export let data: QA[]
  export let dark: string = '#222'
  export let light: string = '#eee'

  let selectedItem: number
</script>

<div class="faq">
  {#if title}
    <h2>{title}</h2>
  {/if}
  <section>
    {#each data as item, index}
      <Item {item} bind:selectedItem {index} --dark={dark} --light={light} />
    {/each}
  </section>
</div>

<style lang="scss">
  .faq {
    section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    h2 {
      font-size: 2rem;
      line-height: 2em;
    }
  }
</style>
