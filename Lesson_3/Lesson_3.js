// 1) За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>I am learning how to work with JavaScript.</div>');
}

// 2) За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>' + i + ': I am learning how to code.</div>');
}
// 3) За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20){
    document.write('<div><h1>I am developing my skills.</h1></div>');
    i++;
}

// 4) За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let x = 0;
while (x < 20) {
    document.write('<div><h1>' + x + ': I am developing my skills.</h1></div>');
    x++;
}

// 5) Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let item of listOfItems){
    document.write('<div><ul><li>' + item + '</li></ul></div>');
}

// 6) Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
// <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
	{
		title: 'tea',
		price: 15,
		image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
	},
];

for (let product of products){
    document.write('<div class="product-card">');
    document.write('<h3 class="product-title">' + product.title + '. Price - ' + product.price + '</h3>');
    document.write('<img src="' + product.image + '" alt="" class="product-image">');
    document.write('</div>');
}

// 7) є масив - за допомоги циклу вивести:
//  користувачів зі статусом true
//  користувачів зі статусом false
//  користувачів які старші за 30 років

let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
];

for (const user of users) {
    if (user.status === true) {
        document.write('<div><ul><li>' + ' Username: ' + user.name + ' - status: ' + user.status + '</li></ul></div>');
    }
}

for (const user of users) {
    if (user.status === false) {
        document.write('<div><ul><li>' + ' Username: ' + user.name + ' - status: ' + user.status + '</li></ul></div>');
    }
}

for (const user of users) {
    if (user.age >= 30) {
        document.write('<div><ul><li>' + ' Username: ' + user.name + ' - age: ' + user.age + '</li></ul></div>');
    }
}