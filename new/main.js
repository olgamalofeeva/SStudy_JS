function clock(){
  var day = new Date().toLocaleDateString();
var time = new Date().toLocaleTimeString();
document.getElementById('clock').innerHTML = day + ' - ' + time;
}
setInterval(clock, 1000);
clock();

var d = new Date;

var weekday = new Array(7);
weekday[0]="Воскресенье";
weekday[1]="Понедельник";
weekday[2]="Вторник";
weekday[3]="Среда";
weekday[4]="Четверг";
weekday[5]="Пятница";
weekday[6]="Суббота";

var month = new Array(12);
month[0]="Январь";
month[1]="Февраль";
month[2]="Март";
month[3]="Апреля";
month[4]="Май";
month[5]="Июнь";
month[6]="Июль";
month[7]="Август";
month[8]="Сентябрь";
month[9]="Октябрь";
month[10]="Ноябрь";
month[11]="Декабрь";


function num2str(n, text_forms) {  
  n = Math.abs(n) % 100; var n1 = n % 10;
  if (n > 4 && n < 21) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 = 21) { return text_forms[0]; }
  if (n1 = 1) { return text_forms[0]; }
  return text_forms[n];
}

var count = d.getHours();
var hours = count + num2str(count, [' час', ' часа', ' часов']);


function num2str(n, text_forms) {  
  n = Math.abs(n) % 100; var n1 = n % 10;
  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }
  return text_forms[2];
}

var num = d.getMinutes();
var minutes = num + num2str(num, [' минута', ' минуты', ' минут']);

var sec = d.getMinutes();
var seconds = sec + num2str(sec, [' секунда', ' секунды', ' секунд']);

document.write('Сегодня ' + weekday[d.getDay()].toLowerCase() + ', ' + d.getDate() + ' ' + month[d.getMonth()].toLowerCase() + ' ' + d.getFullYear() + ' ' + 'года' + ', ' + hours + ' ' + minutes + ' ' + seconds);