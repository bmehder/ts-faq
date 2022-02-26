// import App from './App.svelte'

// const faq = new App({
//   target: document.querySelector('#faq'),
// })

// export default faq

import App from './App.svelte'

export default function (target, props) {
  new App({
    target,
    props,
  })
}
