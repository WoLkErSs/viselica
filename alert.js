/*
var login = prompt('login');
if (login == 'Admin'){
	pass = prompt('pass');
	if (pass == 'Admin'){
		alert("privet Admin");
	}else if (pass == null) {
		alert('Вход отменен');
	}else {
		alert('wrong pass');
	}
}else if (login ==null) {
	alert('Вход отменен');
}else {
	alert("I don't know you!");
}
*/


/*
var a = +prompt("input 'a'");
var b = +prompt("input 'b'");
	result = (a + b < 4) ? 'Мало' : 'Много';
	result = (a + b < 4) ? alert('few') : alert('alot of');
*/

/*
var login = prompt("Введи имя");

var message = (login == 'Вася') ? "Hi" : 
(login == "Boss") ? "Hellow" :
(login == '') ? "no login": '';
alert(message);
*/
/*
var i = 0;
var sum = 0;
var max = 0
while (i<4) {
	var num = prompt('введи число');
	if (num == 'stop'){
		i = 10;
	} else {
	sum += +num;
	if (+num > max){
		max = +num;
	}
	}
	i++;
}
alert(sum/i);
alert(max);
*/
/*
var kapcha = "kapcha";
var flag = false;
while (flag == false){
	var input = prompt('введи строку');
	if (input == kapcha) {
		flag = true;
		alert('угадал');
	} else {
		alert("пробуй");
	}
}
*/
/*
var flag = false;
var sum = 0;
var i = 0
while (flag == false ){
	var num = +prompt("number");
	sum +=num;
	i++;
	if (sum >= 666) {
		flag = true;
		alert('>666');
	} else {
		alert('more');
	}
}

alert(sum/i);
*/
/*
var arr=['test', 123, null, undefined, 'test'] //массив 
var as = [1, 2, 3, 4 ];
var sum = 0;
for (var i = 0; i < as.length ; i++){
	sum += as[i];
}
alert(sum);
*/
/*
var s = prompt('string');
for ( var i=0; i < s.length; i++){
	if (s[i] == 'r') {
		alert('it is "r"');
		break;
	} else {
		alert('more');
	}
}
*/
/*
var i
for ( i = 2 ; i <= 10; i++){
	if (i % 2 ) continue;
	alert(i);
}
*/
/*
var i = 0;
while(i < 3){
	alert('number');
	i++
}
*/
/*
var num;

do {
	num = prompt('number' , 0);
} while (num <= 100 && num != null);
*/
/*
pum:
for ( var n = 2 ; n < 10 ; n++ ){
	for ( var i=2 ; i < n ; i++){
		if( n % i == 0) continue pum;
	}
	alert(n);
}
*/
/*
exit:
for( var i=2 ; i <= 10 ; i++){

	for( var j = 2 ; j < i ; j++){
		if (i % j == 0) continue exit;
	}
	alert(i);
}
*/
/*
var fruits = ["Яблоко", "Апельсин"];

fruits.push("Груша");
fruits.push("Арбуз");
fruits[fruits.length] = "Морковка";

alert(fruits[fruits.length - 1]); // Яблоко, Апельсин, Груша
*/
/*
var styles = ["Джаз", "Блюз"];
styles[styles.length] = "Rok-and-roll"
styles[styles.length - 2] = "Классика";
alert(styles.shift());
styles.unshift("RAP", "Reggy");
*/
/*
var arr = ["sgsf", "fsefsef", "efszfes"];
var rand = Math.floor(Math.random() * arr.length);
alert( arr[rand]);*/
/*
var numbers = [];

while (true) {

  var value = prompt("input a number", 0);

  if (value === "" || value === null || isNaN(value)) break;

  numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
alert(sum);

*/
/*
mas = ["Hello", "my", "world", "!!!"];
var result = []
for ( var i=0; i < mas.length; i++){
	if ( mas[i].length >= 5){
		result.push(mas[i]);
	}
}
alert(result.join(' '));
*/
/*
var arr = [];
for(var i=2; i < 20; i++){
	var del = 0;
	for(var j = 1; j <= i; j++){
		if ( i % j == 0) {
			++del;
		}
	}
	if (del == 2) {
		arr.push(i);
	}
}
alert(arr.join(" "));
*/

/*
var srt = prompt('input string');
var result_str = "";

for(var i=0; i < srt.length; i++){
	if ( srt[i].toUpperCase() == "L" && srt[i+1].toUpperCase() == "O" 
	    && srt[i+2].toUpperCase() == "X") {
		result_str += "***";
		i += 2;
	} else{
		result_str +=srt[i];
	}
}
alert(result_str);
*/

/*
var srt = "thnfitjh";
  if (srt.indexOf('@') == -1){      //indexOf возвращает индекс!
  	alert(" no mail");
  } else{
  	alert('mail');
  };
*/

/*
var srt = "thnfit@@jh";
  if (srt.indexOf('@') == -1 ){      
  	alert(" no @");
  } else if (srt.indexOf('@') != srt.lastIndexOf('@')) {
  	alert('more then one @');
  } else {
  	alert('norm pes')
  }
*/

/*
var sum = 0;
var srt = prompt("Введите строку");  //задание 1
for(var i=0; i < srt.length; i++){
  if( srt[i] != " "){
    sum = sum + 1;
  }
}
  alert(sum);
*/
/*
arr = ["Hello", "my", "world", "!!!"]; //задание 2
result = [];
for( var i=0; i < arr.length; i++){
	if ( arr[i].length >= 5){
		result.push(arr[i]);
	}
}
alert(result.join(' '));
*/
/*
arr = [3, -5, 6, -22, -89, 56, 102]; // ЗАДАНИЕ 3 !!! DONE
mas = [];
for( var i=0; i < arr.length; i++){
	if ( arr[i] < 0){
		mas.push(arr[i]);
	}
}
alert(mas.join(' '));
*/
/*
var mail = prompt('Введите mail');

    if ( mail.length < 6 ){

  	    alert('Вы ввели короткий mail')
    } else if ( mail.indexOf('@') == -1){

    	alert('Вы пропустили @');

    } else if (mail.indexOf('@') != mail.lastIndexOf('@')){

    	alert('Вы ввели слишком много @ в mail');

    } else if ( mail.indexOf('.') == -1){

    	alert('Пропустили "." ');

    } else if ( mail.indexOf('@') > mail.indexOf('.') || mail.indexOf('@') > mail.indexOf('.') - 3)  {

    	alert('@ должна стоять не ближе двух символов перед "."');

    } else if (mail.indexOf('@') < 2) {

    	alert('Между собакой и началом строки должно быть минимум 2 символа');

    } else if ( mail.length <= mail.indexOf('.') + 2) {

    	alert('Между точкой и концом строки - минимум 2 символа');
    } else{

	alert('Вы ввели верный ' + mail + ' mail');
    }
*/
/*// Вотрое задание
var input = prompt('input string!');

    if ( isNaN(input)) {
    	alert('you wrote not a number');
    } else if ( input.indexOf('1') == -1 ) {
    	alert('no 1 in number');
    } else {
    	alert(' your number has 1');
    }
*/
/* // задание 3
var in_1 = prompt('enter the string');
var in_2 = +prompt('enter the correspond number');

if ( in_1.length == in_2 ){
	alert('your number correspond amount of words in string');
} else {
	alert('wrong number');
}
*/
/*
var input = confirm('Вы согласны с нами работать?');  // Дополнительное задание

if (input == false) {

	alert('so sorry');
	
	}else if (true) {
	
		var input_1 = prompt('Какую сомму вы хотели бы вложить?');
	
		if ( isNaN(input_1) || +input_1 < 0){
	
			alert('Сумма не валидна');
		}else if (true) {

			var input_2 = prompt('На сколько вы бы хотели положить сумму');

			if ( isNaN(input_2) || 0 > +input_2 > 24){

				alert('Срок не валиден');

			}else if (true) {

				var input_3 = confirm('Вы вкладывает ' + input_1 + ' денег на ' + input_2 + ' месяцев под 10%. Вы хотите продолжить?' );
				
				if (input_3 == true) {
				
					alert('Спасибо! Количество денег для выдачи - ' + input_1*1.1*input_2);
				
				}else {
				
					alert('Спасибо за ваш выбор приходите к нам еще');

					}
				}
			}
		}	
*/
/*
var array = [2, 3, 4, 5];
var sum = 1;
for (var i = 0; i < array.length; i++){
	sum *= array[i];
}
alert(sum);

*/
/*
var arr = [4, 2, -1, 1, 3, 9, 11],
    current_steps = 0,
    next_index = 0,
    steps = 0;
do {
	steps++;
	if(steps > 0){
		current_steps = next_index;
	}
	next_index = arr[current_steps];
}while(arr[current_steps] != -1);
alert('We have ' + steps + 'steps' );
*/
/*
function pow( x, n) {
	var result = x;

	for ( var i = 1; i < n; i++){
	result *= x;
	}
	
    return result;
}
	var x = prompt('x?');
	var n = prompt('n');

if (n <= 1){
	alert('Степень не верна');
} else {
	alert( pow(x, n) );
}
*/
/*
function sumTo(n) {
  var sum = 0;
  for ( var i = 0; i <= n; i++ ){
  	sum += i;
  }
  return sum;
}
alert(sumTo(100));
*/
/*
function fib(n) {
  var a = 1,
  b = 1;
  for( var i = 1; i <= n; i++){
  	var c = a + b;
  	a = b; 
  	b = c;
  }
  return b;
}
alert ( fib(5));
*/
/*
var arr = [];
	while (true){
	var a = prompt('введите число');
	if (a === "" || a === null || isNaN(a)) break; 
	arr.push(+a);
	}

var sum = 0;

for (var i = 0; i < arr.length; i++) {
	sum += arr[i];
}
alert(sum);
*/
/*
var arr = ["Саша", "Вася", "Алла", "Инна"],
	wor = [];
for( var i = 0; i < arr.length; i++){
	var words = 0;
	for (var j = 0; j < arr[i].length; j++) {
		if(arr[i][j].toUpperCase() === "А"){
			words++;
		}
	} 
	if (words >= 2) {
		wor.push(arr[i]);
	}
}
alert(wor);
*/
/*
var arr = [1, 2, 3, 4, 5];

function add(arr, a){
	for(var i = arr.length; i >=0 ; i--){
		arr[i] = arr[i - 1];
	}
	arr[0] = a;
	return arr;
}
var result = add(arr,34);
alert(result);
*/
/*
var arr = [1, 2, 3, 4, 5];

function join(arr , a){
	var line = "";
	for( var i = 0; i < arr.length - 1; i++){
		line += arr[i] + a;
	} 
	return line + arr[arr.length - 1];
}
var line = join(arr, '!!!')
alert(line);
*/


/*
var room = {
	color: 'blue',
	width:6,
	length:4,
	height:3,
	changeColor: function(color) {
		this.color = color;
	},
	Volume: function() {
		return this.width * this.length * this.height;
	},
	Squa: function() {
		return this.Volume() / this.length;
	}
};
var	room1 = {
	color: 'blue',
	width:23,
	length:21,
	height:34,
	name: 'second',
	changeColor: function(color) {
		this.color = color;
	},
	Volume: function() {
		return this.width * this.length * this.height;
	},
	Squa: function() {
		return this.Volume() / this.length;
	}
};
var	room2 = {
	color: 'blue',
	width:12,
	length:32,
	height:9,
	name: 'third',
	changeColor: function(color) {
		this.color = color;
	},
	Volume: function() {
		return this.width * this.length * this.height;
	},
	Squa: function() {
		return this.Volume() / this.length;
	}
};
var	room3 = {
	color: 'blue',
	width:23,
	length:21,
	height:34,
	name: 'fourth',
	changeColor: function(color) {
		this.color = color;
	},
	Volume: function() {
		return this.width * this.length * this.height;
	},
	Squa: function() {
		return this.Volume() / this.length;
	}
};
var room4 = {
	color: 'blue',
	width:23,
	length:21,
	height:34,
	name: 'fifth',
	changeColor: function(color) {
		this.color = color;
	},
	Volume: function() {
		return this.width * this.length * this.height;
	},
	Squa: function() {
		return this.Volume() / this.length;
	}
};

function the_biggest_square(arr) {
	for(var i = 1; i < arr.length; i++){
		var max = arr[0];
		if(arr[i].Volume() > max.Volume()){
			max = arr[i];
		}
	}
	return  max.name;
}

console.log(the_biggest_square([room, room1, room2, room3, room4]));
*/
/* функция split
var str = 'Vasy, pety, misha, lesha.',
	arr = [],
	mas ='';
for(var i = 0; i < str.length; i++){
	if (str[i] != ',' && str[i + 1] != ' ' && str[i] != '.') {
		mas += str[i];
	} else {
		arr.push(mas);
		mas = '';
	}
}
alert(arr);
*/
/* Функция length
var arr = [1, 2, 3, 4, 5],
	sum = 0;
while (!!arr[sum]){
	sum += 1;
}
alert(sum);
*/
/*
Функция POW
function pow(x,n){
	if (n != 1) {
		return x * pow(x,n-1);
	} else {
		return x;
	}
}
alert(pow(2,3));
*/
/*
var arr = [1, 2, 3, 4, 5],
	number;
function indexOf(arr, a){
	for(var i = 0; i < arr.length; i++){
		if (arr[i] === a){
			return i;
		}
	}
	return -1;
}
var index = indexOf(arr, 5);
alert(index);
*/
/*
//Функция LastIndexOf
var arr = [1, 2, 3, 4, 5];
function lastIndexOf(arr, a){
	for (var i = arr.length - 1; i >= 0; i--){
		if (arr[i] === a){
			return i;
		}
	} 
	return -1;
} 
var lastindex = lastIndexOf(arr,3);
alert(lastindex);
*/

var title = confirm("Let's play the hangman?"),
arr = ['p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'e', 'r'],
answer = ['*','*','*','*','*','*','*','*','*','*'];
var errors = 0;

while(errors < 3 || arr.join("") !== answer.join("")){
	var input = prompt('Hidden words '+ answer.join(" ") + ' Enter the letter');
	for(var i = 0; i < arr.length; i++){
		if (arr[i] == input){
			answer.splice(i, 1, arr[i]);
		} else{
			errors++;
		}
	}
}
alert(answer);
