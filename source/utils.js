import { elements } from "./elements.js"
import { timerTimeOut } from "./timer.js"

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

  function updateTimerDisplay(minutes, seconds) {
    elements.minutesDisplay.innerText = String(minutes).padStart(2, '00')
    elements.secondsDisplay.innerText = String(seconds).padStart(2, '00')
  }

  function showPlayButton(value) {
    if (value) {
      elements.playButton.classList.remove('hide')
      elements.pauseButton.classList.add('hide')
      return  
    }
    elements.playButton.classList.add('hide')
    elements.pauseButton.classList.remove('hide')
  }

  function pauseTimer() {
    clearTimeout(timerTimeOut)
    showPlayButton(true)
  }

  function resetTimer() {
    clearTimeout(timerTimeOut)
    showPlayButton(true)
    updateTimerDisplay(25, 0)
  }

  function incraseTime() {
    let minutes = Number(elements.minutesDisplay.textContent)
    let seconds = Number(elements.secondsDisplay.textContent)
    updateTimerDisplay(minutes + 5, seconds)
  }

  function decraseTime() {
    let minutes = Number(elements.minutesDisplay.textContent)
    let seconds = Number(elements.secondsDisplay.textContent)

    if (minutes > 0) {
      updateTimerDisplay(minutes - 5, seconds)
    }
    if (minutes < 5) {
      updateTimerDisplay(0, 0)
      showPlayButton(true)
    }
  }

  return {
    toogleTheme,
    updateTimerDisplay,
    showPlayButton,
    pauseTimer,
    resetTimer,
    incraseTime,
    decraseTime
  }
}