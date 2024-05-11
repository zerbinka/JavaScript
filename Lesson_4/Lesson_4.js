// 1) - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// плюс внизу перевірка
function rectangleArea(a, b) {
    let result = a * b;
    return result;
}

let rec1 = rectangleArea(5,`10`);
console.log(rec1);

// 2) - створити функцію яка обчислює та повертає площу кола з радіусом r  - A=πr2
// плюс внизу перевірка
function circleArea(radius) {
    let result = Math.PI * Math.pow(radius, 2);
    return result;
}

let cir1 = circleArea(100);
console.log(cir1);

// 3) - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r -  A=2πrh+2πr2
// плюс внизу перевірка
function cylinderArea(r, h){
    let result = (2 * Math.PI * r * h) + (2 * Math.PI * Math.pow(r, 2));
    return result;
}

let cyl1 = cylinderArea(15, 25);
console.log(cyl1);

// 4) - створити функцію яка приймає масив та виводить кожен його елемент
// плюс внизу перевірка
function loop (array) {
    for (const item of array){
        console.log(item);
    }
}

const myArray = ['Ana', 'Leo', 17, 13, true, false];
console.log(myArray);

// 5) - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// плюс внизу перевірка
function paragraph(text) {
    document.write(`<div><p>${text}</p></div>`);
}

paragraph('In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing.[citation needed] It is a set of signs that is available to be reconstructed by a reader (or observer) if sufficient interpretants are available. This set of signs is considered in terms of the informative message\'s content, rather than in terms of its physical form or the medium in which it is represented.');

// 6) - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// плюс внизу перевірка
function unorderedList (element) {
    document.write('<div><ul>');
    document.write(`<li>${element}</li>`);
    document.write(`<li>${element}</li>`);
    document.write(`<li>${element}</li>`);
    document.write('</ul</div>');
}
unorderedList('lemons and oranges');

// 7) - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// плюс внизу перевірка
// Цей таск спочатку взагалі не зрозуміла. Після констультації стало зрозуміліше. Тому я просто повторила за прикладом викладача.
function listCreator (text, count, tagName){
    for (let i = 0; i < count; i ++){
        document.write(`<${tagName}>${text}</${tagName}>`);
    }
}
listCreator('Hello Everyone!', 5, 'li');

// 8) - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// плюс внизу перевірка
function primitiveArr(array) {
        document.write('<div>');
            for (const item of array) {
                document.write(`<ul>${item}</ul>`);
    }
        document.write('</div>');
}

const myArr = ['October', 'August', 17, 13, true, true];
primitiveArr(myArr);

// 9) - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// плюс внизу перевірка
function objects(objectsArray) {
    for (let object of objectsArray) {
        document.write(`<div>ID: ${object.id}, Name: ${object.name}, Age: ${object.age}</div>`);
    }
}

let myarrayOfObjects = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 35 },
    { id: 3, name: 'Charlie', age: 25 }
];
objects(myarrayOfObjects);

// 10) - створити функцію яка повертає найменьше число з масиву
// плюс внизу перевірка

function smallestNumber(arrayOfNumbers) {
    let smallestNumber = arrayOfNumbers[0];
    for (const number of arrayOfNumbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber;
}

let myArrOfNumbers = [1009, 234, 54, 9, 876, 423, 23, 45667, 4243, 3453, 674564, 25, 2, 239480];
let smallestNumberResult = smallestNumber(myArrOfNumbers);
console.log(smallestNumberResult);


// 11) - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// плюс внизу перевірка
function sum(arr){
    let sum = 0;
    for (const number of arr) {
        sum += number;
    }
    return sum;
}
let myArrOfNumb = [1009, 234, 54, 9, 876, 423, 23, 45667, 4243, 3453, 674564, 25, 2, 239480];
let myArrSum = sum(myArrOfNumb);
console.log(myArrSum);

// 12) - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// плюс внизу перевірка

function swap (arrNumbers, index1, index2){
    let newIndex = arrNumbers[index1];
    arrNumbers[index1] = arrNumbers[index2];
    arrNumbers[index2] = newIndex;

    return arrNumbers;
}
arrNumbers = [11,22,33,44];
console.log(swap(arrNumbers, 0, 1));


// 13) - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// плюс внизу перевірка

    function exchange(sumUAH, currencyValues, exchangeCurrency) {
        for (let i = 0; i < currencyValues.length; i++) {
            if (currencyValues[i].currency === exchangeCurrency) {
                return sumUAH / currencyValues[i].value;
            }
        }
        return 'Currency not found';
    }

    console.log(exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD'));