import Sounds from './sounds.js'
let { timeEnd } = Sounds()

export function Timer({ minutesDisplay, secondsDisplay, resetControls }) {
	let timerTimeOut
	let minutes = Number(minutesDisplay.textContent)

	function updateDisplay(newMinutes, seconds) {
		newMinutes = newMinutes === undefined ? minutes : newMinutes
		seconds = seconds === undefined ? 0 : seconds
		minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
		secondsDisplay.textContent = String(seconds).padStart(2, '0')
	}

	function countdown() {
		timerTimeOut = setTimeout(function () {
			let seconds = Number(secondsDisplay.textContent)
			let minutes = Number(minutesDisplay.textContent)
			let isFinished = minutes <= 0 && seconds <= 0

			updateDisplay(minutes, 0)

			if (isFinished) {
				timeEnd()
				resetControls()
				updateDisplay()
				return
			}

			if (seconds <= 0) {
				seconds = 60
				--minutes
			}
			--seconds

			updateDisplay(minutes, seconds)
			countdown()
		}, 1000)
	}

	function plus() {
		updateDisplay(
			Number(minutesDisplay.textContent) + 1,
			Number(secondsDisplay.textContent)
		)
	}

	function minus() {
		let minutes = Number(minutesDisplay.textContent)
		let seconds = Number(secondsDisplay.textContent)

		if (minutes > 1) {
			updateDisplay(minutes - 1, seconds)
		} else {
			updateDisplay(0, seconds)
		}
	}

	function reset() {
		updateDisplay(minutes, 0)
		clearTimeout(timerTimeOut)
	}

	function hold() {
		clearTimeout(timerTimeOut)
	}

	return {
		hold,
		reset,
		plus,
		minus,
		countdown
	}
}
