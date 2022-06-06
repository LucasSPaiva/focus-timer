import {
	buttonPlay,
	buttonPause,
	buttonStop,
	buttonPlus,
	buttonMinus,
	forestCard,
	rainCard,
	fireCard,
	coffeeCard
} from './elements.js'

export default function ({ timer, controls, sounds }) {
	buttonPlay.addEventListener('click', function () {
		controls.play()
		timer.countdown()
		sounds.pressButton()
	})

	buttonPause.addEventListener('click', function () {
		controls.pause()
		timer.hold()
		sounds.pressButton()
	})

	buttonStop.addEventListener('click', function () {
		controls.pause()
		timer.reset()
		sounds.pressButton()
	})

	buttonPlus.addEventListener('click', function () {
		timer.plus()
	})

	buttonMinus.addEventListener('click', function () {
		timer.minus()
	})

	forestCard.addEventListener('click', function () {
		controls.toggle(forestCard)
		sounds.playAudio(sounds.forestAudio, forestCard)
	})

	rainCard.addEventListener('click', function () {
		controls.toggle(rainCard)
		sounds.playAudio(sounds.rainAudio, rainCard)
	})

	fireCard.addEventListener('click', function () {
		controls.toggle(fireCard)
		sounds.playAudio(sounds.fireAudio, fireCard)
	})

	coffeeCard.addEventListener('click', function () {
		controls.toggle(coffeeCard)
		sounds.playAudio(sounds.coffeeAudio, coffeeCard)
	})
}
