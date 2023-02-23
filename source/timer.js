import { elements } from "./elements.js"
import Utils from "./utils.js"
import Sounds from "./sounds.js"

const utils = Utils()
const sounds = Sounds()

export let timerTimeOut

export const timer = function() {
  timerTimeOut = setTimeout(() => {
    let minutes = Number(elements.minutesDisplay.textContent)
    let seconds = Number(elements.secondsDisplay.textContent)
    
    if (minutes <= 0 && seconds <= 0) {
      sounds.timeEnd()
      return
    }
    
    if (seconds <= 0) {
      minutes--
      seconds = 60
      utils.updateTimerDisplay(minutes, seconds)
    }
    
    seconds--
    utils.updateTimerDisplay(minutes, seconds)
    
    timer()
  }, 1000)
}