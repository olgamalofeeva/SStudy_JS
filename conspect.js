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

  //события

  let square = document.querySelector('.square');
  let count = 0;

  square.onclick = function(){ // Здесь мы передаем событие, ограничивающее клик по квадрату до 3х раз
      if(count === 3){
        square.onclick= null;
          return;
      }

      count++;
      console.log('Вы кликнули на квадрат');
  } //устаревший способ

  square.addEventListener('click', function /*передаем функцию, которая будет обрабатывать события*/ (){
      console.log('Кликаю по квадрату');
  });

  //можно создать функцию отдельно
  let clicked = function(){
      count++;
      if(count === 3) square.removeEventListener('click', clicked); //после 3 нажатия на квадрат, мы удалим обработчик события кликд
      console.log('один раз кликаю по квадрату');
  };

  square.addEventListener('click', clicked);

  let eventFunc = function(event){
      console.log(event.type);
  };

  square.addEventListener('click', eventFunc);
  square.addEventListener('mouseup', eventFunc);
  square.addEventListener('mousedown', eventFunc);
  square.addEventListener('mousemove', eventFunc);
  
  square.addEventListener('mouseenter', eventFunc);
  square.addEventListener('mouseleave', eventFunc);
  square.addEventListener('mouseover', eventFunc);
  square.addEventListener('mouseout', eventFunc);

  //работа с формами

  document.querySelector('#text').addEventListener('input'/*срабатывает всегда, когда работаем с текстом в форме*/, eventFunc);
  document.querySelector('#text').addEventListener('change'/*срабатывает всегда, когда мы теряем фокус и значение value поменялось*/, eventFunc);