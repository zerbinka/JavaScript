// Масиви та об'єкти: Task 2.1.
// part 2.1.1. - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

arr = ['Anastasiya', 'Zerbino', 17, 'October', 1986, 'Lviv', 'Ukraine', 'Ukrainian', 'Bucharest', false];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//part 2.1.2. - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'interesting',
    pageCount: 200,
    genre: 'thriller'
}

let book2 = {
    title: 'boring',
    pageCount: 550,
    genre: 'autobiography'
}

let book3 = {
    title: 'okayish',
    pageCount: 350,
    genre: 'sci-fi'
}
console.log(book1.title);
console.log(book2.pageCount);
console.log(book3.genre);

//part 2.1.3. - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'interesting',
    pageCount: 200,
    genre: 'thriller',
    author: {
        name: 'Black',
        age: 75
    }
}

let book5 = {
    title: 'boring',
    pageCount: 550,
    genre: 'autobiography',
    author: {
        name: 'White',
        age: 25
    }
}

let book6 = {
    title: 'okayish',
    pageCount: 350,
    genre: 'sci-fi',
    author: {
        name: 'Grey',
        age: 60
    }
}

console.log(book4.author.name);
console.log(book5.author.age);
console.log(book6.author.name);

//part 2.1.4. - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: '1', username: 'one', password: 'password_1'},
    {name: '2', username: 'two', password: 'password_2'},
    {name: '3', username: 'three', password: 'password_3'},
    {name: '4', username: 'four', password: 'password_4'},
    {name: '5', username: 'five', password: 'password_5'},
    {name: '6', username: 'six', password: 'password_6'},
    {name: '7', username: 'seven', password: 'password_7'},
    {name: '8', username: 'eight', password: 'password_8'},
    {name: '9', username: 'nine', password: 'password_9'},
    {name: '10', username: 'ten', password: 'password_10'}
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//part 2.1.5. - Описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let WeatherForecast = [
    {
        day: 'Monday',
        morningTemperature: '15°C',
        daytimeTemperature: '20°C',
        eveningTemperature: '18°C'
    },
    {
        day: 'Tuesday',
        morningTemperature: '16°C',
        daytimeTemperature: '22°C',
        eveningTemperature: '20°C'
    },
    {
        day: 'Wednesday',
        morningTemperature: '17°C',
        daytimeTemperature: '25°C',
        eveningTemperature: '22°C'
    },
    {
        day: 'Thursday',
        morningTemperature: '17°C',
        daytimeTemperature: '24°C',
        eveningTemperature: '19°C'
    },
    {
        day: 'Friday',
        morningTemperature: '15°C',
        daytimeTemperature: '20°C',
        eveningTemperature: '18°C'
    },
    {
        day: 'Saturday',
        morningTemperature: '16°C',
        daytimeTemperature: '21°C',
        eveningTemperature: '16°C'
    },
    {
        day: 'Sunday',
        morningTemperature: '17°C',
        daytimeTemperature: '23°C',
        eveningTemperature: '18°C'
    },
];

console.log(WeatherForecast[0]);
console.log(WeatherForecast[1]);
console.log(WeatherForecast[2]);
console.log(WeatherForecast[3]);
console.log(WeatherForecast[4]);
console.log(WeatherForecast[5]);
console.log(WeatherForecast[6]);

//Логічні розгалуження: Task 2.2.
// part 2.2.1. - Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 378;
if (x !== 0){
    console.log('Вірно')
} else {
  console.log('Невірно')
}

// part 2.2.2. - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = 12;
if (time <= 15) {
    console.log('1 quarter')
} else if (time > 15 && time <=30) {
    console.log('2 quarter');
} else if (time >30 && time <= 45) {
    console.log('3 quarter');
} else if (time >45 && time <= 59) {
    console.log('4 quarter');
} else {
    console.log('beginning of the next hour');
}

// part 2.2.3. - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 5;
if (day <=10 ) {
    console.log('beginning of of the month')
} else if (day > 10 && day <=20) {
    console.log('middle of the month');
} else if (day >20 && day <= 31) {
    console.log('end of the month');
} else {
    console.log('unknown');
}

// part 2.2.4. - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekday = '';
switch (weekday) {
    case 'Monday':
        console.log('Monday is a hard day. I have to work all day.');
        break;
    case 'Tuesday':
        console.log('Tuesday is also quite hard. I have to work even more.');
        break;
    case 'Wednesday':
        console.log('Half of the week has passed. Press on with your work.');
        break;
    case 'Thursday':
        console.log('A bit more to go!')
        break;
    case 'Friday':
        console.log('Lucky you! Friday is a fun day.')
        break;
    case 'Saturday':
        console.log('Get some good rest!')
        break;
    case 'Sunday':
        console.log('Enjoy your Sunday before another week starts.')
        break;
    default:
        console.log('nothing planned yet')
}

// part 2.2.5. - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох . Також потрібно врахувати коли введені рівні числа.

// Вагалась чи можна це зробити через switch???????????????


let number1 = 5685887;
let number2 = 5685887;

if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else if (number1 === number2) {
    console.log('They are equal.')
} else {
    console.log('Unknown')
}


// part 2.2.6. - Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

//Це завдання для мене було найважчим. Я скористалась підказками чата GPT для того, щоб розв'язати його. І все одно до кінця не розумію рішення, чому let result = variable ? variable : 'default';

let variable = NaN;
let result = variable ? variable : 'default';
console.log(result);




// part 2.2.7. - З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Well done! Course:', coursesAndDurationArray[0].title);
}

if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Well done! Course:', coursesAndDurationArray[1].title);
}

if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Well done! Course:', coursesAndDurationArray[2].title);
}

if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Well done! Course:', coursesAndDurationArray[3].title);
}

if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Well done! Course:', coursesAndDurationArray[4].title);
}

if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Well done! Course:', coursesAndDurationArray[5].title);
}