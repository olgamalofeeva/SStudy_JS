// console.log('Hello, world!'); горячие клавиши для однострочного комментирования command + /

// Переменные в JS
var myVar = 10; //для имени переменной используем существительное. Имя не может начинаться с цифры

// Типы данных (7 шт.)
myVar = 10;
console.log(typeof myVar);
myVar = 'Hello, world!';
console.log(typeof myVar);
myVar = true;
console.log(typeof myVar);
myVar = null;
console.log(typeof myVar);
myVar = undefined;
console.log(typeof myVar);
myVar = Symbol();
console.log(typeof myVar);
myVar = {};
console.log(typeof myVar);

//логические операторы: || (или - возвращает истину, когда один из операндов истина) && (и - возвращает истину, только если оба операнда истина) ! (не - оператор отрицания)

//callback
 
const foo = function (data, callback) {
    if(typeof(data) === 'number') {
        callback(data, 'type number')
    } else {

    }
  }

  const addCash = function () {
      const cash = {};

      return function(key) {
            if(cash[key]) {
                console.log(key + 'уже есть в cash');
            } else {
                cash[key] = 'val: ' + key;
                console.log(cash);
            }
      }
  };

  const foo = addCash();

  foo('Привет 1');
  foo('Привет 2');  
  foo('Привет 3');
  foo('Привет 4');
  foo('Привет 5');
  foo('Привет 1');

  