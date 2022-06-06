export default function () {
	const buttonPressAudio = new Audio(
		'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
	)

	const kitchenTimer = new Audio(
		'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
	)

	const forestAudio = new Audio('../audio/forest.wav')
	const coffeeAudio = new Audio('../audio/coffee.wav')
	const rainAudio = new Audio('../audio/rain.wav')
	const fireAudio = new Audio('../audio/fire.wav')

	forestAudio.loop = true
	coffeeAudio.loop = true
	rainAudio.loop = true
	fireAudio.loop = true

	function pressButton() {
		buttonPressAudio.play()
	}

	function timeEnd() {
		kitchenTimer.play()
	}

	function playAudio(sound, card) {
		let isActive = card.classList.contains('active')
		isActive === false ? sound.pause() : sound.play()
	}

	return {
		pressButton,
		timeEnd,
		playAudio,
		forestAudio,
		coffeeAudio,
		rainAudio,
		fireAudio
	}
}
