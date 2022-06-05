const playButton = document.querySelector('.playButton')
const pauseButton = document.querySelector('.pauseButton')
const stopButton = document.querySelector('.stopButton')
const plusButton = document.querySelector('.plusButton')
const minusButton = document.querySelector('.minusButton')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const minutesStart = minutesDisplay.textContent

let timerTimeOut

function hideShowButton(hideButton, showButton) {
	hideButton.classList.add('hide')
	showButton.classList.remove('hide')
}

function updateDisplay(minutes, seconds) {
	minutesDisplay.textContent = String(minutes).padStart(2, '0')
	secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
	updateDisplay(minutesStart, 0)
	pauseTimer()
	console.log('Timer resets')
}

function pauseTimer() {
	hideShowButton(pauseButton, playButton)
	clearTimeout(timerTimeOut)
	console.log('Timer paused')
}

function playTimer() {
	hideShowButton(playButton, pauseButton)
	countdown()
}

function countdown() {
	timerTimeOut = setTimeout(function () {
		let minutes = Number(minutesDisplay.textContent)
		let seconds = Number(secondsDisplay.textContent)

		if (minutes <= 0 && seconds <= 0) {
			console.log('Timer finished')
			resetTimer()
			return
		}

		if (seconds <= 0) {
			seconds = 60
			--minutes
		}
		--seconds

		console.log('Minutes: ' + minutes)
		console.log('Seconds: ' + seconds)
		updateDisplay(minutes, seconds)

		countdown()
	}, 1000)
}

playButton.addEventListener('click', function () {
	playTimer()
})

pauseButton.addEventListener('click', function () {
	pauseTimer()
})

stopButton.addEventListener('click', function () {
	resetTimer()
})

plusButton.addEventListener('click', function () {
	updateDisplay(
		Number(minutesDisplay.textContent) + 5,
		Number(secondsDisplay.textContent)
	)
})

minusButton.addEventListener('click', function () {
	let minutes = Number(minutesDisplay.textContent)
	let seconds = Number(secondsDisplay.textContent)
	if (minutes > 5) {
		updateDisplay(minutes - 5, seconds)
	} else {
		updateDisplay(0, seconds)
	}
})
