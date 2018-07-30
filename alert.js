
var title = confirm("Let's play the hangman?");
var name = prompt('Input your name')
var words = ['building', 'table', 'programmer', 'roof', 'mobile', 'mouse', 'porridge', 'language', 'pineapple','friend'];
var arr = [];
var answer = [];
var errors = 0;

var current_word = words[(Math.random()*10).toFixed(0)];

function currentWord(current_word){

	for(var i = 0; i < current_word.length; i++ ){
		arr.push(current_word[i]);
	}
	return arr;
}

console.log( currentWord(current_word) );
console.log(arr);

	for(var j = 0; j < arr.length; j++){
		answer.push("*");
	}
console.log(answer);

do {
var input_level = prompt('Input one of difficult level: easy, middle, hard');
	if(input_level.toUpperCase() !== 'EASY' && input_level.toUpperCase() !== 'MIDDLE' && input_level.toUpperCase() != 'HARD' ){
		alert('You inputted wrong level of difficulty');
	}
}while(input_level.toUpperCase() !== 'EASY' && input_level.toUpperCase() !== 'MIDDLE' && input_level.toUpperCase() != 'HARD' );

	function difficultyLevel(input_level){
		if(input_level.toUpperCase() === 'EASY')
			return have_mistake = 5;
		if(input_level.toUpperCase() === 'MIDDLE')
			return have_mistake = 4;
		if(input_level.toUpperCase() === 'HARD')
			return have_mistake = 3;
	}

console.log(difficultyLevel(input_level));

while( arr.join("") !== answer.join("")){
	if (errors < difficultyLevel(input_level)) {

		var input = prompt('Hidden words '+ answer.join(" ") + ' Enter the letter');
		for(var i = 0; i < arr.length; i++){
			if (arr[i] == input){
				answer.splice(i, 1, arr[i]);
			};
		};
			if (arr.indexOf(input) == -1) {
				errors++;
			}
		if(arr.join("") === answer.join("")){
			alert('You won!!! Congratulations)');
		};
	} else{
		answer = arr;
		alert('You lose hahahahahahahaha');
	};
}
console.log(answer);
console.log(errors);
