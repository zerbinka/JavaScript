// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.




// Виконання
// Ця частина видалась для мене значно важчою в порівнянні з першою сторінкою.
// Логіку ніби розумію загалом, але як підійти до таску щось не можу зрозуміти. За моєю логікою я би створювала окремий div в якому б відображалась вся інфа про юзера і в кінці була б кнопка перехід на іншу сторінку. Але питання як мені витащити саме ту інфу що потрібне від саме того юзера? Короче, я запуталась тут.
// Кажу як є, користалась підказками чата GPT. Його логіка видалась інакшою від моєї, але все спрацювало добре.
// Я не знаю чи я правильно зрозуміла і зробила все, але ось це завдання - "блоки з короткою іфною про post - в ряд по 5" мені щось не дуже ясно.
// Було би мабуть трохи зозуміліше якби був якийсь малюнок щоб розуміти краще стилізацію і позиціонування елементів
// Також мені здається, що інколи (залежно від того на якого юзера клацнути) є якась невеличка затримка між переходом з другої сторінки на 3, але воно мене дуже нервує))))))). Не знаю як це виправити і чому це відбувається.
// Стала шукати як це пофіксати - пробувала різні варіанти:
// 1) додала 'defer' до мого HTML
// 2) змінила порядок стилізації та коду в джаваскрипті, спочатку стилізація
// 3) додала userDetailsContainer.innerHTML = '<p>Loading...</p>';
// 4) в результаті винесла стилізацію в html - стало краще, але не прям вау! Перехід між сторінками не плавний, але принаймні трохи зник цей ефект - flashing of the previous styles

window.onload = () => {
    const userDetailsContainer = document.getElementById('user-details-container');

    userDetailsContainer.style.opacity = '0'; // Set initial opacity to 0

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    if (userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(user => {
                const userDetails = `
                    <h2>User Details</h2>
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;
                userDetailsContainer.innerHTML = userDetails;

                const postsButton = document.createElement('button');
                postsButton.textContent = 'Posts of current user';
                postsButton.addEventListener('click', () => {
                    window.location.href = `post-details.html?userId=${userId}`;
                });

                postsButton.style.display = 'block';
                postsButton.style.backgroundColor = '#adadb4';
                postsButton.style.width = '90%';
                postsButton.style.margin = '30px auto';
                postsButton.style.padding = '10px';
                postsButton.style.fontSize = '16px';
                postsButton.style.cursor = 'pointer';

                userDetailsContainer.appendChild(postsButton);

                // Fade-in effect
                userDetailsContainer.style.transition = 'opacity 0.5s';
                userDetailsContainer.style.opacity = '1';
            })
            .catch(error => console.error('Error fetching user details:', error));
    } else {
        userDetailsContainer.textContent = 'No user ID provided in the URL.';
    }
};