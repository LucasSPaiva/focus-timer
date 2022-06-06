import Sound from './sounds.js'
import Events from './events.js'
import { Timer } from './timer.js'
import Controls from './controls.js'
import {
	buttonPlay,
	buttonPause,
	secondsDisplay,
	minutesDisplay
} from './elements.js'

const controls = Controls({
	buttonPlay,
	buttonPause
})

const timer = Timer({
	minutesDisplay,
	secondsDisplay,
	resetControls: controls.pause
})

const sounds = Sound()

Events({ timer, controls, sounds })

