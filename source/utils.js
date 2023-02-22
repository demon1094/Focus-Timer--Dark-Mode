import { elements } from "./elements.js"

export default function() {
  function toogleTheme() {
    elements.darkModeButton.classList.toggle('hide')
    elements.lightModeButton.classList.toggle('hide')

    if (elements.body.classList.contains('dark-mode')) {
      elements.body.classList.remove('dark-mode')
      elements.body.classList.add('light-mode')
      return
    }

    elements.body.classList.add('dark-mode')
    elements.body.classList.remove('light-mode')
  }

  return {
    toogleTheme
  }
}