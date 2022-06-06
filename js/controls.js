export default function Controls({ buttonPlay, buttonPause }) {
	function hideShowButton(hideButton, showButton) {
		hideButton.classList.add('hide')
		showButton.classList.remove('hide')
	}

	function play() {
		hideShowButton(buttonPlay, buttonPause)
		console.log('Timer initialized')
	}

	function pause() {
		hideShowButton(buttonPause, buttonPlay)
		console.log('Timer paused')
	}

	function toggle(card) {
		card.classList.toggle('active')
	}

	return {
		play,
		pause,
		toggle
	}
}
