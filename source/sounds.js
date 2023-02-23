import { elements } from "./elements.js"

export default function() {
  const buttonPressAudio = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true')
  const kitchenTimer = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')
  
  const forestAudio = new Audio('https://github.com/demon1094/Focus-Timer--Dark-Mode/blob/master/sounds/forest.mp3?raw=true')
  const rainAudio = new Audio('https://github.com/demon1094/Focus-Timer--Dark-Mode/blob/master/sounds/rain.mp3?raw=true')
  const lofiAudio = new Audio('https://github.com/demon1094/Focus-Timer--Dark-Mode/blob/master/sounds/lofi.mp3?raw=true')
  const fireAudio = new Audio('https://github.com/demon1094/Focus-Timer--Dark-Mode/blob/master/sounds/fire.mp3?raw=true')
  
  function pressButton() {
    buttonPressAudio.volume = 0.2
    buttonPressAudio.play()
  }
  
  function timeEnd() {
    kitchenTimer.play()
  }

  function checkSoundOn(sound, soundCard) {
    if (sound.volume > 0) {
      soundCard.style.outline = '3px solid #b81d1d'
      return
    }
    soundCard.style.outline = '3px solid transparent'
  }

  elements.forestSoundInput.oninput = () => {
    forestAudio.loop = true
    forestAudio.volume = elements.forestSoundInput.value / 30
    forestAudio.play()

    checkSoundOn(forestAudio, elements.forestCard)
  }
  
  elements.rainSoundInput.oninput = () => {
    rainAudio.loop = true
    rainAudio.volume = elements.rainSoundInput.value / 30
    rainAudio.play()
    
    checkSoundOn(rainAudio, elements.rainCard)
  }
  
  elements.lofiSoundInput.oninput = () => {
    lofiAudio.loop = true
    lofiAudio.volume = elements.lofiSoundInput.value / 30
    lofiAudio.play()
    
    checkSoundOn(lofiAudio, elements.lofiCard)
  }
  
  elements.fireSoundInput.oninput = () => { 
    fireAudio.loop = true
    fireAudio.volume = elements.fireSoundInput.value / 30
    fireAudio.play()

    checkSoundOn(fireAudio, elements.fireCard)
  }
  
  return {
    pressButton,
    timeEnd,
  }
}