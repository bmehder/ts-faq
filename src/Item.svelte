<script lang="ts">
  import { slide } from 'svelte/transition'

  export let item: QA
  export let index: number
  export let selectedItem: number = null

  const { question, answer } = item

  let isOpen: boolean

  $: isOpen = selectedItem === index

  const handleClick = (): void => {
    if (isOpen) {
      selectedItem = null
      return
    }
    selectedItem = index
  }
</script>

<div class="faq-item">
  <h3 class:open={isOpen} on:click={handleClick}>
    <span>{question}</span>
    <i class="fas fa-chevron-down" />
  </h3>
  {#if isOpen}
    <div transition:slide>{@html answer}</div>
  {/if}
</div>

<style lang="scss">
  .faq-item {
    h3 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 2rem;
      background: var(--light);
      color: var(--dark);
      line-height: 1.5rem;
      cursor: pointer;
      transition: all 120ms ease;
    }

    h3:hover,
    h3.open {
      background: var(--dark);
      color: var(--light);
    }

    div {
      padding: 1.5rem 2rem 0;
      font-size: 18px;
      line-height: 1.5rem;
    }

    i {
      transition: transform 200ms ease;
    }

    .open i {
      transform: rotate(180deg);
    }
  }
</style>
