<style>
  .faq-item h3 {
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
  .faq-item h3:hover,
  .faq-item.open h3 {
    background: #282568;
    color: #efefef;
  }
  .faq-item div {
    padding: 1.5rem 2rem 0;
    font-size: 18px;
    line-height: 1.5rem;
  }
  .faq-item i {
    transition: transform 200ms ease;
  }
  .faq-item.open i {
    transform: rotate(180deg);
  }
  @media screen and (max-width: 600px) {
    .faq-item div {
      padding: 0 0.5rem;
    }
  }
</style>
