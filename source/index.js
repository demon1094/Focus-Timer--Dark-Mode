import { elements } from "./elements.js"
import { timer } from "./timer.js"
import Utils from "./utils.js"
import Sounds from "./sounds.js"

const sounds = Sounds()
const utils = Utils()

elements.darkModeButton.addEventListener('click', () => { utils.toogleTheme(), sounds.pressButton() })
elements.lightModeButton.addEventListener('click', () => { utils.toogleTheme(), sounds.pressButton() })

elements.playButton.addEventListener('click', () => { timer(), utils.showPlayButton(false), sounds.pressButton() })
elements.pauseButton.addEventListener('click', () => { utils.pauseTimer(), sounds.pressButton() })

elements.stopButton.addEventListener('click', () => { utils.resetTimer(), sounds.pressButton() })

elements.incraseTimeButton.addEventListener('click', () => { utils.incraseTime(), sounds.pressButton() })
elements.decraseTimeButton.addEventListener('click', () => { utils.decraseTime(), sounds.pressButton() })