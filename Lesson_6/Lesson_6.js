// - Знайти та вивести довижину настипних стрінгових значень - 'hello world', 'lorem ipsum', 'javascript is cool'
// Не знаю чи я правильно зрозуміла формулювання завдання

let a = 'hello world';
let b = 'lorem ipsum';
let res1 = a.concat(' lorem ipsum');
console.log(res1);
let res2 = res1.concat(' javascript is cool');
console.log(res2);
let length = res2.length;
console.log(length);

// - Перевести до великого регістру наступні стрінгові значення - 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(res2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення - 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(a.toLowerCase());
console.log(b.toLowerCase());
console.log(res2.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.endsWith(' '));
console.log(str.length);
console.log(str.substring(1, 13));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToarray(string) {
    return string.split(' ');
}

let string = 'Ревуть воли як ясла повні';
let arr = stringToarray(string);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringNumbers = numbers.map(function(number) {
    return String(number);
});
console.log(stringNumbers);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// function sortNums(a, b) {
//     if (a > b) {
//         return 1;
//     } else if (b > a) {
//         return -1;
//     } else {
//         return 0;
//     }
// }
//
// let nums1 = [11, 21, 3];
// nums1.sort(sortNums);
// console.log(nums1);

function sortNums(a, b) {
  if (a > b) {
       return -1;
   } else if (a < b) {
      return 1;
  } else {
      return 0;
  }
}

let nums = [11, 21, 3];
nums.sort(sortNums);
console.log(nums);

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort(function(a, b) {
    return b.monthDuration - a.monthDuration;
});
console.log('Sorted by descending order - month duration:', coursesAndDurationArray);

// Також відсортувала за зростанням monthDuration
// coursesAndDurationArray.sort(function(a, b) {
//     return a.monthDuration - b.monthDuration;
// });
// console.log('Sorted by month duration:', coursesAndDurationArray);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let filteredcourses = coursesArray.filter(function(course) {
    return course.monthDuration > 5;
});
console.log(filteredcourses);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// Не дуже зрозуміла завдання - В масиві, який вказаний в завданні є лише 2 елементи title,monthDuration. Id немає. Тобто що я маю зробити??? Перетворити title в number на числовий тип, який йде в наступному елементі monthDuration. Але не бачу в цьому сенсу. Тому переробила monthduration у стрінгу.
let courseArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let convertedcourse = courseArray.map(function(course) {
    return {
        monthduration:String(course.monthDuration)
    };
});

console.log(convertedcourse);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', '6' '7' '8' '9' '10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

let cardSuits = ['spades', 'diamonds', 'hearts', 'clubs'];
let values = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king', 'joker'];

let cards = cardSuits.reduce((acc, suit) => {
    values.forEach(value => {
        let color = (suit === 'diamonds' || suit === 'hearts') ? 'red' : 'black';
        acc.push({
            cardSuit: suit,
            value: value,
            color: color
        });
    });
    return acc;
}, []);

console.log(cards);
console.log(cards.find(card => card.cardSuit === 'spades' && card.value === 'ace'));
console.log(cards.find(card => card.cardSuit === 'spades' && card.value === 6));
console.log(cards.find(card => card.cardSuit === 'diamonds' && card.value === 6));
console.log(cards.find(card => card.cardSuit === 'hearts' && card.value === 6));
console.log(cards.find(card => card.cardSuit === 'clubs' && card.value === 6));

let redCards = cards.filter(card => card.color === 'red');
console.log(redCards);

let diamonds = cards.filter(card => card.cardSuit === 'diamonds');
console.log(diamonds);

let highClubs = cards.filter(card => card.cardSuit === 'clubs' && values.indexOf(card.value) >= 3);
console.log(highClubs);
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let sortedCards = cards.reduce((acc, card) => {
    acc[card.cardSuit].push(card);
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(sortedCards);
// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass

let courArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let courseWithSass = courArray.filter(function(course) {
    return course.modules.includes('sass');
});

console.log(courseWithSass);

// --написати пошук всіх об'єктів, в який в modules є docker
let coursesWithDocker = courArray.filter(function(course) {
    return course.modules.includes('docker');
});

console.log(coursesWithDocker);