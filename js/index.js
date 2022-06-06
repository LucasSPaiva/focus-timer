import Events from './events.js'
import Controls from './controls.js'
import { Timer } from './timer.js'
import {
	buttonPlay,
	buttonPause,
	minutesDisplay,
	secondsDisplay
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

Events({ timer, controls })
