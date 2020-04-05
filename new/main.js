'use strict';

let isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const getRandomNum = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gameRandom = function() {
    const randomNum = getRandomNum(1, 100); //получаем рандомное число
    return function checkNumber() {
        const userNumber = prompt('Угадай число от 1 до 100?');

        if (isNum(userNumber)) {
            const num = +userNumber;
            if (num > randomNum) {
                alert ('Загаданное число меньше');
                return checkNumber();
            } else if (num < randomNum) {
                alert ('Загаданное число больше');
                return checkNumber();
            }
            confirm('Ура! Вы отгадали число!');
            
        } else {
            if(userNumber === null) return alert ('Пока друг!');
            alert('Введите число!');
            checkNumber();
        }
    }
    }

    const game = gameRandom();
    game();


