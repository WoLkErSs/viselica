
var title = confirm("Let's play the hangman?"),
arr = ['p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'e', 'r'],
answer = ['*','*','*','*','*','*','*','*','*','*'];
var errors = 0;

while( arr.join("") !== answer.join("")){
	if (errors < 3) {

		var input = prompt('Hidden words '+ answer.join(" ") + ' Enter the letter');
		for(var i = 0; i < arr.length; i++){
			if (arr[i] == input){
				answer.splice(i, 1, arr[i]);
			};
		}
			if (arr.indexOf(input) == -1) {
				errors++;
			}

	} else{
		answer = arr;
		alert('You lose hahahahahahah')
	}
}
console.log(answer);
console.log(errors);


