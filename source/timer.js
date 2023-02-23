import Utils from "./utils.js"
import { elements } from "./elements.js"

const utils = Utils()

export let timerTimeOut

export const timer = function() {
  timerTimeOut = setTimeout(() => {
    let minutes = Number(elements.minutesDisplay.textContent)
    let seconds = Number(elements.secondsDisplay.textContent)
    
    if (minutes <= 0 && seconds <= 0) {
      return
    }
    
    if (seconds <= 0) {
      minutes--
      seconds = 60
      utils.updateTimeDisplay(minutes, seconds)
    }
    
    seconds--
    utils.updateTimeDisplay(minutes, seconds)
    
    timer()
  }, 1000)
}