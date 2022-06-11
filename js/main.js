const inputValue = document.querySelector('.enter-number__input');
const tryBtn = document.querySelector('.enter-number__button');
const message = document.querySelector('.message__text');
const countText = document.querySelector('.message__attempt');
const restartBtn = document.querySelector('.game-restart__button');
let pcNumber = Math.floor(Math.random() * 101);
let count = 0;

const findNumber = function(num) {
	if (num < pcNumber) {
		message.innerHTML = 'Try a greater number';
	} else if (num > pcNumber) {
		message.innerHTML = 'Try a smaller number';
	} else if (num == pcNumber) {
		message.innerHTML = 'Congratulations!!! ';
		countText.innerHTML = `You guessed it right in ${count} guess`;
	}
}

tryBtn.addEventListener('click', function() {
	let enterNumber = inputValue.value;
	if (enterNumber == ' ') {
		alert('Enter the number')
	} else {
		count ++;
		findNumber(enterNumber);
	}
})

restartBtn.addEventListener('click', function() {
	window.location.reload();
})