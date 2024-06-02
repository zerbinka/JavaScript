//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
// Це я для себе пишу пояснення і послідовність дій
// 1. window.onload - is often used to ensure that all page elements are loaded before any other scripts are executed. This is important for ensuring that all page elements are properly initialized and can be used in other scripts.
// 2. document.getElementById - to get access to the html element
// 3. fetch + url - to bring API from the server
// 4. forEach loop (for arrays) - to iterate though the array of carts + document.createElement - create a separate <div> for better structure and for styling purposes.
// 5. for in loop (for objects) - to iterate over each key-value pair in each cart object + document.createElement create a paragraph element for each key-value pair.
// 6. textContent + JSON.stringify - is used to set the text content of the paragraph element
// 7. to append the cart container to the main container.
window.onload = () => {
    const cartsContainer = document.getElementById('carts-container');
    fetch('https://dummyjson.com/carts')
        .then(response => response.json())
        .then(data => {
            const carts = data.carts;
            carts.forEach(cart => {
                const cartDiv = document.createElement('div');
                cartDiv.classList.add('cart');
                for (const key in cart) {
                    const value = cart[key];
                    const p = document.createElement('p');
                    p.textContent = `${key}: ${JSON.stringify(value)}`;
                    cartDiv.appendChild(p);
                }
                cartsContainer.appendChild(cartDiv);
            });
        })
};

// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
// - я не знаю чомусь не видно на сторінці першого завдання, пробувала міняти назви змінних, але нічого не дає
window.onload = () => {
    const recipesContainer = document.getElementById('recipes-container');

    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);
            data.recipes.forEach(recipe => {
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe');

                const title = document.createElement('h2');
                title.textContent = recipe.title;
                recipeDiv.appendChild(title);

                const description = document.createElement('p');
                description.textContent = recipe.description;
                recipeDiv.appendChild(description);

                const ingredientsList = document.createElement('ul');
                recipe.ingredients.forEach(ingredient => {
                    const listItem = document.createElement('li');
                    listItem.textContent = ingredient;
                    ingredientsList.appendChild(listItem);
                });
                recipeDiv.appendChild(ingredientsList);

                recipesContainer.appendChild(recipeDiv);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
};


// Не встигла це завдання зробити, оскільки приступила до виконання проекту і там вже застрягла ((
// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

