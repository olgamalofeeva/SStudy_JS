const collectionBooks = document.querySelectorAll('.book');

console.log(collectionBooks);

collectionBooks[0].before(collectionBooks[1]);
collectionBooks[3].before(collectionBooks[4]);
collectionBooks[5].after(collectionBooks[2]);

const chapterName = document.querySelectorAll('h2>a');
console.log(chapterName);
chapterName[2].textContent = 'Книга 3. this и Прототипы Объектов';

const adv = document.querySelector('.adv');

adv.remove();

const partChapter = document.querySelectorAll('ul');

partChapter[1].classList.add('newEl');
partChapter[4].classList.add('newElem');
partChapter[5].classList.add('newElement');


const tableContents1 = document.querySelectorAll('.newEl>li');
console.log(tableContents1);
const tableContents2 = document.querySelectorAll('.newElem>li');
console.log(tableContents2);
const tableContents3 = document.querySelectorAll('.newElement>li');


tableContents1[3].after(tableContents1[6]);
tableContents1[6].after(tableContents1[8]);
tableContents1[9].after(tableContents1[2]);

tableContents2[1].after(tableContents2[9]);
tableContents2[4].after(tableContents2[2]);
tableContents2[7].after(tableContents2[5]);

const newObj = document.createElement('li');
newObj.textContent = 'Глава 8: За пределами ES6';
console.log(newObj);
partChapter[5].append(newObj);

console.log(tableContents3);