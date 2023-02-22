import Utils from "./utils.js";
import { elements } from "./elements.js";

const utils = Utils()

elements.darkModeButton.addEventListener('click', utils.toogleTheme)
elements.lightModeButton.addEventListener('click', utils.toogleTheme)

