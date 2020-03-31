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

const language = {
    en: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
    ru: 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'
};

console.log(language.en);

let namePerson = 'Кирилл';

let result01 = namePerson === 'Артем' ? 'директор':'студент';
console.log(result01);
let result02 = namePerson === 'Максим' ? 'преподаватель':'студент';
console.log(result02);



