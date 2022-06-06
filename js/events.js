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

export default function ({ timer, controls }) {
	buttonPlay.addEventListener('click', function () {
		timer.countdown()
		controls.play()
	})

	buttonPause.addEventListener('click', function () {
		controls.pause()
		timer.hold()
	})

	buttonStop.addEventListener('click', function () {
		controls.pause()
		timer.reset()
	})

	buttonPlus.addEventListener('click', function () {
		timer.plus()
	})

	buttonMinus.addEventListener('click', function () {
		timer.minus()
	})

	forestCard.addEventListener('click', function () {
		controls.toggle(forestCard)
	})

	rainCard.addEventListener('click', function () {
		controls.toggle(rainCard)
	})

	fireCard.addEventListener('click', function () {
		controls.toggle(fireCard)
	})

	coffeeCard.addEventListener('click', function () {
		controls.toggle(coffeeCard)
	})
}
