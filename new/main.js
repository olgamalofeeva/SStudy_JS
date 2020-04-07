// // const funcNumber = function() {
// //     const q = prompt ('Угадай число от 1 до 100');
    
// // const one = function (n) {
// //     if (q > n) {
// //         return (alert('Загаданное число меньше'));
// //     } else if (q < n) {
// //         return (alert('Загаданное число больше'));
// //     } else if (q == n) {
// //         return (alert ('Ты выиграл!'));
// //     } else if (q != Number) {
// //         function two(){
// //              return (b = prompt ('Введите число'));}
// //         two(q);     
// //     } else {
// //         return (alert('Game over'));
// //     }
// //     }
// //     return (one(9));
// // };

// // console.log(funcNumber());

// const addCash = function () {
//     const cash = {};

//     return function(key) {
//           if(cash[key]) {
//               console.log(key + 'уже есть в cash');
//           } else {
//               cash[key] = 'val: ' + key;
//               console.log(cash);
//           }
//     }
// };

// const foo = addCash();

// foo('Привет 1');
// foo('Привет 2');  
// foo('Привет 3');
// foo('Привет 4');
// foo('Привет 5');
// foo('Привет 1');

// let words = ['первый', 'второй', 'третий'];
// for (let word of words) {
//     word = word.charAt(0).toUpperCase() + word.substr(1);
//     console.log(word);
// }

function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
  
    console.log('Оригинальная строка: "' + stringToSplit + '"');
    console.log('Разделитель: "' + separator + '"');
    console.log('Массив содержит ' + arrayOfStrings.length + ' элементов: ' + arrayOfStrings.join(' / '));
  }
  
  // Строчка из «Бури» Шекспира. Перевод Миxаила Донского.
  var tempestString = 'И как хорош тот новый мир, где есть такие люди!';
  var monthString = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек';
  
  var space = ' ';
  var comma = ',';
  
  splitString(tempestString, space);
  splitString(tempestString);
  splitString(monthString, comma);