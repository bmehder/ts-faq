<script lang="ts">
  import { wound, knee } from './data'
  import Item from './Item.svelte'

  let selectedItem: number
</script>

<div class="faq">
  <h2>Wound Care</h2>
  <section>
    {#each wound as item, index}
      <Item {item} bind:selectedItem {index} />
    {/each}
  </section>

  <h2>Knee Pain</h2>
  <section>
    {#each knee as item, index}
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
