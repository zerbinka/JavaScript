//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone. Створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
users.push(new User(1, 'Ivan', 'Ivaniv', 'ivaniv@gmail.com', '+380971234567'));
users.push(new User(2, 'Petro', 'Petriv', 'petriv@gmail.com', '+380972345678'));
users.push(new User(3, 'Oleg', 'Olegiv', 'olegiv@gmail.com', '+380973456789'));
users.push(new User(4, 'Anna', 'Annaiv', 'annaiv@gmail.com', '+380974567890'));
users.push(new User(5, 'Maria', 'Mariiv', 'mariiv@gmail.com', '+380975678901'));
users.push(new User(6, 'Olena', 'Oleniv', 'oleniv@gmail.com', '+380976789012'));
users.push(new User(7, 'Dmytro', 'Dmytriv', 'dmytriv@gmail.com', '+380977890123'));
users.push(new User(8, 'Viktor', 'Viktoriv', 'viktoriv@gmail.com', '+380978901234'));
users.push(new User(9, 'Natalia', 'Nataliiv', 'nataliiv@gmail.com', '+380979012345'));
users.push(new User(10, 'Yuriy', 'Yuriyiv', 'yuriyiv@gmail.com', '+380970123456'));

console.log(users);


// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersArray = [
    new User(1, 'Ivan', 'Ivaniv', 'ivaniv@gmail.com', '+380971234567'),
    new User(2, 'Petro', 'Petriv', 'petriv@gmail.com', '+380972345678'),
    new User(3, 'Oleg', 'Olegiv', 'olegiv@gmail.com', '+380973456789'),
    new User(4, 'Anna', 'Annaiv', 'annaiv@gmail.com', '+380974567890'),
    new User(5, 'Maria', 'Mariiv', 'mariiv@gmail.com', '+380975678901'),
    new User(6, 'Olena', 'Oleniv', 'oleniv@gmail.com', '+380976789012'),
    new User(7, 'Dmytro', 'Dmytriv', 'dmytriv@gmail.com', '+380977890123'),
    new User(8, 'Viktor', 'Viktoriv', 'viktoriv@gmail.com', '+380978901234'),
    new User(9, 'Natalia', 'Nataliiv', 'nataliiv@gmail.com', '+380979012345'),
    new User(10, 'Yuriy', 'Yuriyiv', 'yuriyiv@gmail.com', '+380970123456')
];

let filteredUsers = usersArray.filter(function(user) {
    return user.id % 2 === 0;
});
console.log(filteredUsers);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
usersArray.sort((a, b) => a.id - b.id);
console.log(usersArray);

// те саме, тільки по спаданню, було цікаво
//usersArray.sort((a, b) => b.id - a.id);
// console.log(usersArray);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class ClientClass {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order || []; //Ось це я підглянула в чата GPT і щось не можу зрозуміти чому він хоче через АБО а не просто []
  }
}
let client1 = new Client(1, 'John', 'Doe', 'john@example.com', '+123456789', ['product1', 'product2']);
console.log(client1);

// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order || [];
}

let clients = [];
clients.push(new Client(1, 'Ivan', 'Ivaniv', 'ivaniv@gmail.com', '+380971234567'));
clients.push(new Client(2, 'Petro', 'Petriv', 'petriv@gmail.com', '+380972345678'));
clients.push(new Client(3, 'Oleg', 'Olegiv', 'olegiv@gmail.com', '+380973456789'));
clients.push(new Client(4, 'Anna', 'Annaiv', 'annaiv@gmail.com', '+380974567890'));
clients.push(new Client(5, 'Maria', 'Mariiv', 'mariiv@gmail.com', '+380975678901'));
clients.push(new Client(6, 'Olena', 'Oleniv', 'oleniv@gmail.com', '+380976789012'));
clients.push(new Client(7, 'Dmytro', 'Dmytriv', 'dmytriv@gmail.com', '+380977890123'));
clients.push(new Client(8, 'Viktor', 'Viktoriv', 'viktoriv@gmail.com', '+380978901234'));
clients.push(new Client(9, 'Natalia', 'Nataliiv', 'nataliiv@gmail.com', '+380979012345'));
clients.push(new Client(10, 'Yuriy', 'Yuriyiv', 'yuriyiv@gmail.com', '+380970123456'));

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// Просто додала products в мій clientArray вручну бо я не знаю як їх додати інакше))

let clientArray = [
    {
        "id": 1,
        "name": "Ivan",
        "surname": "Ivaniv",
        "email": "ivaniv@gmail.com",
        "phone": "+380971234567",
        "order": ["Product 1", "Product 2"]
    },
    {
        "id": 2,
        "name": "Petro",
        "surname": "Petriv",
        "email": "petriv@gmail.com",
        "phone": "+380972345678",
        "order": ["Product 1", "Product 2", "Product 3", "Product 4"]
    },
    {
        "id": 3,
        "name": "Oleg",
        "surname": "Olegiv",
        "email": "olegiv@gmail.com",
        "phone": "+380973456789",
        "order": ["Product 1"]
    },
    {
        "id": 4,
        "name": "Anna",
        "surname": "Annaiv",
        "email": "annaiv@gmail.com",
        "phone": "+380974567890",
        "order": ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"]
    },
    {
        "id": 5,
        "name": "Maria",
        "surname": "Mariiv",
        "email": "mariiv@gmail.com",
        "phone": "+380975678901",
        "order": ["Product 1", "Product 2", "Product 3"]
    },
    {
        "id": 6,
        "name": "Olena",
        "surname": "Oleniv",
        "email": "oleniv@gmail.com",
        "phone": "+380976789012",
        "order": ["Product 1"]
    },
    {
        "id": 7,
        "name": "Dmytro",
        "surname": "Dmytriv",
        "email": "dmytriv@gmail.com",
        "phone": "+380977890123",
        "order": ["Product 1", "Product 2"]
    },
    {
        "id": 8,
        "name": "Viktor",
        "surname": "Viktoriv",
        "email": "viktoriv@gmail.com",
        "phone": "+380978901234",
        "order": ["Product 1", "Product 2", "Product 3"]
    },
    {
        "id": 9,
        "name": "Natalia",
        "surname": "Nataliiv",
        "email": "nataliiv@gmail.com",
        "phone": "+380979012345",
        "order": ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"]
    },
    {
        "id": 10,
        "name": "Yuriy",
        "surname": "Yuriyiv",
        "email": "yuriyiv@gmail.com",
        "phone": "+380970123456",
        "order": ["Product 1", "Product 2", "Product 3"]
    }
]

clientArray.sort((a, b) => a.order.length - b.order.length);
console.log(clientArray);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car - НЕ зрозуміла

function Car(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function() {
        console.log(`We are driving at ${this.maxSpeed} per hour`);
    };

    this.info = function() {
        console.log(`this.model = ${this.model};`);
        console.log(`this.producer = ${this.producer};`);
        console.log(`this.year = ${this.year};`);
        console.log(`this.maxSpeed = ${this.maxSpeed};`);
        console.log(`this.engine = ${this.engine};`);
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`Max speed increased to ${this.maxSpeed}`);
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
        console.log(`Production year changed to ${this.year}`);
    };
}

let car1 = new Car('Model S', 'Tesla', 2020, 200, 'Electric');
car1.drive();
car1.info();
car1.increaseMaxSpeed(250);
car1.changeYear(2021);


//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`We are driving at ${this.maxSpeed} per hour`);
    }

    info() {
        console.log(`this.model = ${this.model};`);
        console.log(`this.producer = ${this.producer};`);
        console.log(`this.year = ${this.year};`);
        console.log(`this.maxSpeed = ${this.maxSpeed};`);
        console.log(`this.engine = ${this.engine};`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`Max speed increased to ${this.maxSpeed}`);
    }

    changeYear(newValue) {
        this.year = newValue;
        console.log(`Production year changed to ${this.year}`);
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

// Correctly instantiate the Car2 class
let myCar2 = new Car2('Model S', 'Tesla', 2020, 200, 'Electric');
myCar2.drive();
myCar2.info();
myCar2.changeYear(2022);
myCar2.addDriver({ name: 'John Doe', age: 30 });
console.log(myCar2.driver);


//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella('Cinderella1', 18, 35),
    new Cinderella('Cinderella2', 19, 36),
    new Cinderella('Cinderella3', 20, 37),
    new Cinderella('Cinderella4', 21, 38),
    new Cinderella('Cinderella5', 22, 39),
    new Cinderella('Cinderella6', 23, 40),
    new Cinderella('Cinderella7', 24, 41),
    new Cinderella('Cinderella8', 25, 42),
    new Cinderella('Cinderella9', 26, 43),
    new Cinderella('Cinderella10', 27, 44)
];

console.log(cinderellas);

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const prince = new Prince('Charming', 30, 39);
let foundCinderella = null;
for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].footSize === prince.shoeSize) {
        foundCinderella = cinderellas[i];
        break;
    }
}
console.log("Found Cinderella with if loop:", foundCinderella);

const foundCinderellaWithFind = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize);
console.log("Found Cinderella with find method:", foundCinderellaWithFind);

//Через Array.prototype. створити власний foreach, filter, map
// Adding myForEach method
Array.prototype.myForEach = function (callback) {
    for (const item of this) {
        callback(item);
    }
};

let arr = [1, 2, 3, 4, 5];
arr.myForEach(el => console.log(el));  // Output each element of the array

// Adding myMap method to Array prototype
Array.prototype.myMap = function (callback) {
    let array = [];
    for (const item of this) {
        array.push(callback(item));
    }
    return array;
};

let cinderellasNew = [
    { name: 'Cinderella1', age: 18, footSize: 35 },
    { name: 'Cinderella2', age: 19, footSize: 36 },
    { name: 'Cinderella3', age: 20, footSize: 37 },
    { name: 'Cinderella4', age: 21, footSize: 38 },
    { name: 'Cinderella5', age: 22, footSize: 39 },
    { name: 'Cinderella6', age: 23, footSize: 40 },
    { name: 'Cinderella7', age: 24, footSize: 41 },
    { name: 'Cinderella8', age: 25, footSize: 42 },
    { name: 'Cinderella9', age: 26, footSize: 43 },
    { name: 'Cinderella10', age: 27, footSize: 44 }
];

let mapped = cinderellasNew.myMap(el => {
    return el.name;
});
console.log(mapped);

// Adding myFilter method
Array.prototype.myFilter = function(callback) {
    let filteredArray = [];
    for (const item of this) {
        if (callback(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
};

let arrNew = [1, 2, 3, 4, 5];
let filtered = arrNew.myFilter(el => el % 2 === 0);
console.log(filtered);

