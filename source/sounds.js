import { elements } from "./elements.js"

export default function() {
  const buttonPressAudio = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true')
  const kitchenTimer = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')
  
  const forestAudio = new Audio()
  const rainAudio = new Audio()
  const lofiAudio = new Audio()
  const fireAudio = new Audio()
  
  function pressButton() {
    buttonPressAudio.volume = 0.2
    buttonPressAudio.play()
  }
  
  function timeEnd() {
    kitchenTimer.play()
  }
  
  function setSoundsOn() {
    forestAudio.src = './sounds/forest.mp3'
    forestAudio.loop = true
    forestAudio.volume = 0
    forestAudio.play()

    rainAudio.src = './sounds/rain.mp3'
    rainAudio.loop = true
    rainAudio.volume = 0
    rainAudio.play()

    lofiAudio.src = './sounds/lofi.mp3'
    lofiAudio.loop = true
    lofiAudio.volume = 0
    lofiAudio.play()

    fireAudio.src = './sounds/fire.mp3'
    fireAudio.loop = true
    fireAudio.volume = 0
    fireAudio.play()
  }

  function checkSoundOn(sound, soundCard) {
    if (sound.volume > 0) {
      soundCard.style.outline = '3px solid #b81d1d'
      return
    }
    soundCard.style.outline = '3px solid transparent'
  }

  
  elements.forestSoundInput.oninput = () => { 
    forestAudio.volume = elements.forestSoundInput.value / 30
    checkSoundOn(forestAudio, elements.forestCard)
  }
  
  elements.rainSoundInput.oninput = () => { 
    rainAudio.volume = elements.rainSoundInput.value / 30
    checkSoundOn(rainAudio, elements.rainCard)
  }
  
  elements.lofiSoundInput.oninput = () => { 
    lofiAudio.volume = elements.lofiSoundInput.value / 30
    checkSoundOn(lofiAudio, elements.lofiCard)
  }
  
  elements.fireSoundInput.oninput = () => { 
    fireAudio.volume = elements.fireSoundInput.value / 30
    checkSoundOn(fireAudio, elements.fireCard)
  }

  window.onload = setSoundsOn
  
  return {
    pressButton,
    timeEnd,
  }
}