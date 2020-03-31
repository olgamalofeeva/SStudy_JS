let lang_en = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
let lang_ru = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';

let lang = confirm('Ваш язык русский?');
console.log(lang);

if (lang === true) {
    console.log(lang_ru);
} else if (lang === false) {
    console.log(lang_en);
}

switch (lang) {
    case true:
        console.log (lang_ru);
        break;
    default:
        console.log (lang_en);   
}

let result = lang === true ? lang_ru:lang_en;
console.log (result);

let namePerson = 'Кирилл';

let result01 = namePerson === 'Артем' ? 'директор':'студент';
console.log(result01);
let result02 = namePerson === 'Максим' ? 'преподаватель':'студент';
console.log(result02);

var arr_1 = new Array('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
var arr_2 = new Array('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
for(var i = 0; i < [1,2]; i++) arr_1[i] = i;
for(var i = 0; i < [1,2,3]; i++) arr_2[i] = i;

var arr = new Array(arr_1, arr_2);

//Первый цикл проходит три раза переберая элементы массива arr
/*Второй цикл переберает количество елементов во вложеном массиве и так как первый цикл проходит три 
раза то второй проходит 3 * arr[x].length раз.*/
for(var x = 0; x < arr.length; x++){
	for(var j = 0; j < arr[x].length; j++) {
		document.write(arr[x][j] + " ");
	}
	document.write("<br />");
}
