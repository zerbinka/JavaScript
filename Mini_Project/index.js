//В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)


// Виконання
// Спочатку переношу масив з об'єтами за допомогою fetch в загальний users-container
// Використовую window.onload щоб переконатись, що код спрацює коли завантажиться уся сторінка
// Через document.getElementById доступаюсь до масиву в html
// Додаю стилізацію елементів

window.onload = () => {
    const usersContainer = document.getElementById('users-container');

    usersContainer.style.display = 'flex';
    usersContainer.style.flexWrap = 'wrap';
    usersContainer.style.gap = '20px';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');

                //Стилізація елементів
                userDiv.style.border = '1px solid #ddd';
                userDiv.style.padding = '20px';
                userDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
                userDiv.style.flex = '1 1 calc(50% - 20px)';
                userDiv.style.boxSizing = 'border-box';
                userDiv.style.backgroundColor = '#d8d8e0';

                const id = document.createElement('h6');
                id.textContent = `ID: ${user.id}`;
                userDiv.appendChild(id);

                const name = document.createElement('h5');
                name.textContent = `Name: ${user.name}`;
                userDiv.appendChild(name);

                const button = document.createElement('button');
                button.textContent = 'Details';
                // Стилізація кнопки
                button.style.marginTop = '10px';
                button.style.backgroundColor = '#adadb4';
                button.addEventListener('click', () => {
                    window.location.href = `user-details.html?id=${user.id}`;
                });
                userDiv.appendChild(button);

                usersContainer.appendChild(userDiv);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
};






