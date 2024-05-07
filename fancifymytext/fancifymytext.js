const onLoad = () => {
	const textarea = document.getElementById('textarea');
	const fancyShmancy = document.getElementById('fancy-shmancy');
	const boringBetty = document.getElementById('boring-betty');
	const biggerButton = document.getElementById('bigger');
	const mooButton = document.getElementById('moo');

	fancyShmancy.onchange = event => {
		textarea.style.fontWeight = 'bold';
		textarea.style.color = 'blue';
		textarea.style.textDecoration = 'underline';
	}

	boringBetty.onchange = event => {
		textarea.style.fontWeight = 'normal';
		textarea.style.color = 'initial';
		textarea.style.textDecoration = 'none';
	}

	biggerButton.onclick = event => {
		textarea.style.fontSize = '24pt';
	}

	mooButton.onclick = event => {
		textarea.value = textarea.value.toUpperCase().split('.?!').join('-Moo.');
	}
}

// wait for DOM to load to start executing the script
addEventListener('DOMContentLoaded', onLoad);