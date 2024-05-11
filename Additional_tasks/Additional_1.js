// -створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

array = [
    [17, 10, 1986, 13, 8],
    ['Ana', 'Leo', 'Matheus', 'Silvia', 'Daniel'],
    ['October', 17, 'August', 13, true]
];

console.log(array);
console.log(array[1][3]);
console.log(array[2][4]);

//- є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < arr.length){
    console.log(arr);
    i++;
}

// 2. перебрати його циклом for
for (let i = 0; i < arr.length; i++){
    console.log(arr);
}

// 3. перебрати циклом while та вивести числа тільки з непарним індексом
let ar = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let x = 1; // Start with the first odd index

while (x < ar.length) {
    console.log(ar[x]); // Print the element at the current odd index
    x += 2; // Move to the next odd index
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 1; i < arr.length; i += 2) {
    console.log(arr[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні значення
let ArrayNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let c = 0;

while (c < ArrayNew.length) {
    console.log(ArrayNew[c]);
    c += 2;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
let ArrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < ArrNew.length; i += 2) {
    console.log(ArrNew[i]);
}

// 7. замінити кожне число кратне 3 на слово "okten"

// 8. вивести масив в зворотньому порядку.

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)