// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let f1 = document.forms.f1;
f1.onsubmit = function (e) {
    e.preventDefault();

    let name = f1.name.value;
    let surname = f1.surname.value;
    let age = f1.age.value;

    let userObject = {
        name: name,
        surname: surname,
        age: age
    };

    let outputDiv = document.getElementById('output');
    outputDiv.textContent = JSON.stringify(userObject, null, 2);

    console.log(userObject);
};

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let divNumber = document.getElementById('divNumber');
let currentNumber = localStorage.getItem('currentNumber');
if (currentNumber === null) {
    currentNumber = 0;
} else {
    currentNumber = parseInt(currentNumber);
}
currentNumber += 1;
divNumber.textContent = currentNumber;
localStorage.setItem('currentNumber', currentNumber);


//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// Не дуже розумію завдання. Пропустила його


//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
// 1. Create an array consisting of 100 objects using a Function constructor or a Class

// Моя пропозиція по вирішенню завдання:
// Отже моя логіка була наступна:
// 1) Спочатку за допомогою Function constructor або Class мені треба створити масив і наповнити його 100 об'єктами.
// 2) Щоб доступитись до цього масиву, мені треба створити відповіники в html file <div>, <button>Previous</button>, <button>Next</button>
// 3) Думала, чи необхідно тут використовувати localStorage для того, щоб зберігались дані з попередніх сторінок. Чат GPT сказав мені, що це не обов'язково
// 4) Для того щоб юзер зміг коритсуватись кнопками Prev/Next, я буду використовувати оператор логічних розгалужень - if (якщо наступні 10 стор - то Next, якщо попередні 10 - то Previous)
// 5) Оскільки це масив, мені треба використовувати цикли, щоб ітерувати по всьому масиву
// 6) Також мені здається, що треба використовувати тут JSON.stringify, щоб дані відображались у більш читабельній формі. Але я не впевнена в цьому. Запитала в чата GPT він каже, ось так - While you can use JSON.stringify to convert objects to a readable string format for display purposes, it's often better to format the data in a more user-friendly way, especially if the objects have many properties or nested structures.
// Це була моя логіка, але написання самого коду, тобто застосування вже самих паттернів мені ще досить складно. Тому я користалась порадами чата GPT на жаль, щоб самій ще краще розубрітись. Я не знаю чи це ок якщо чесно, але так мені стає більш зрозуміло патерни(((( Я запитала в нього чи мій підхід правильний. Він сказав, що код трохи нагромаджений.

// 1. Створюю масив + створила відповідні елементи в html file
class MyObject {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
// 2. Створюю цикл щоб ітерувати по масиву і переходити на наступну сторінку
const objects = [];
for (let i = 1; i <= 100; i++) {
    objects.push(new MyObject(i, `Object ${i}`));
}

// 3. Вооджу поняття змінних для того щоб задати діапазон сторінок
let currentIndex = 0;
const itemsPerPage = 10;

// 4. За допомогою функції треба доступитись до мого масиву в документі і вказати, що буде з ним відбуватись і що буде відображатись на веб сторінці
function displayObjects(startIndex) {
    const container = document.getElementById('object-container');
    container.innerHTML = '';
    const endIndex = Math.min(startIndex + itemsPerPage, objects.length);

    for (let i = startIndex; i < endIndex; i++) {
        const objDiv = document.createElement('div');
        objDiv.textContent = JSON.stringify(objects[i], null, 2);
        container.appendChild(objDiv);
    }
}

// 5. Тепер треба доступитись до кнопок в документі і знову ж таки вказати, що має відбуватись при події - настискання, задати умови та використати addEventListener
document.getElementById('prev-button').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= itemsPerPage;
        displayObjects(currentIndex);
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentIndex + itemsPerPage < objects.length) {
        currentIndex += itemsPerPage;
        displayObjects(currentIndex);
    }
});

// 6. Викликаємо функцію
displayObjects(currentIndex);

// Наступне завдання
//Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let deleteButton = document.getElementById('deleteButton');
let textDiv = document.getElementById('text');

deleteButton.addEventListener('click', () => {
    textDiv.style.display = 'none';
});

// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let confirmButton = document.getElementById('confirmButton');

confirmButton.addEventListener('click', () => {
    let userAge = parseInt(document.getElementById('myInput').value);

    if (userAge >= 18) {
        alert('You are over 18!');
    } else {
        alert('You are under 18.');
    }
});