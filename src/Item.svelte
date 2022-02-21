<script lang="ts">
  interface Item {
    question: string
    answer: string
  }

  import { slide } from 'svelte/transition'

  export let item: Item
  export let index: number
  export let selectedItem: number

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

<div class="faq-item" class:open={isOpen}>
  <h3 on:click={handleClick}>
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
      background: #efefef;
      color: #282568;
      line-height: 1.5rem;
      cursor: pointer;
    }

    h3:hover,
    .open h3 {
      background: #282568;
      color: #efefef;
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

    @media screen and (max-width: 600px) {
      div {
        padding: 0 0.5rem;
      }
    }
  }
</style>
