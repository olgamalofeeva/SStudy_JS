const showMessage = function () {
   if (typeof a == 'string') {
       return (a);
    } else {
    return ('функция передана неверно');
};
};

String.prototype.trunc = String.prototype.trunc ||
      function(n){
          return (this.length > n) ? this.substr(0, n-1) + '...' : this;
      };

var a = 'он отлично работает, ну вот как мне задать если в БД больше 30 символов, чтобы не просто обрезалось кол во символов, а было многоточие в конце на php спасибо. Если вопросы, спрашивайте.';

console.log(showMessage().trunc(30).trim());
