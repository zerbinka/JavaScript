// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


// Виконання
// Знову ж таки щодо стилізації, я гн впевнена чи правильно зроузуміла. Було б дуже помічним мати якийсь макет, малюнок, який би демонстрував позицію елементів в заданні. Тим більше, що коментарі подані просто як приклади і не немуть жодного змістового наповнення, тому я не могла зрозуміти завдання щодо стилізації.
// Я трошки додала свого бачення і подала коментарі не по 4 блоки а по 5 в рядок, мені якось так краще і логічніше виглядає. Але знову ж таки я могла неправильно зрозуміти завдання.
// Також мені здається, що інколи (залежно від того на якого юзера клацнути) є якась невеличка затримка між переходом з другої сторінки на 3, але воно мене дуже нервує))))))). Не знаю як це виправити і чому це відбувається.

window.onload = () => {
    const postDetailsContainer = document.getElementById('post-details-container');
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    if (userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                posts.forEach(post => {
                    const postDiv = document.createElement('div');
                    postDiv.classList.add('post');

                    const postTitle = document.createElement('h3');
                    postTitle.textContent = post.title;
                    postDiv.appendChild(postTitle);

                    const postBody = document.createElement('p');
                    postBody.textContent = post.body;
                    postDiv.appendChild(postBody);

                    // Style the post div
                    postDiv.style.backgroundColor = '#d8d8e0';
                    postDiv.style.border = '1px solid #ddd';
                    postDiv.style.margin = '20px auto';
                    postDiv.style.padding = '20px';
                    postDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
                    postDiv.style.maxWidth = '850px';
                    postDiv.style.textAlign = 'center';

                    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                        .then(response => response.json())
                        .then(comments => {
                            const commentsSection = document.createElement('div');
                            const commentsTitle = document.createElement('h4');
                            commentsTitle.textContent = 'Comments';
                            commentsTitle.style.textAlign = 'center';
                            commentsSection.appendChild(commentsTitle);

                            const commentsGrid = document.createElement('div');
                            commentsGrid.style.display = 'grid';
                            commentsGrid.style.gridTemplateColumns = 'repeat(5, 1fr)';
                            commentsGrid.style.gap = '10px';
                            commentsGrid.style.justifyItems = 'center';

                            comments.forEach(comment => {
                                const commentDiv = document.createElement('div');
                                commentDiv.classList.add('comment');

                                const commentName = document.createElement('h5');
                                commentName.textContent = comment.name;
                                commentDiv.appendChild(commentName);

                                const commentBody = document.createElement('p');
                                commentBody.textContent = comment.body;
                                commentDiv.appendChild(commentBody);

                                // Style the comment div
                                commentDiv.style.backgroundColor = '#adadb4';
                                commentDiv.style.border = '1px solid #ddd';
                                commentDiv.style.padding = '10px';
                                commentDiv.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.1)';
                                commentDiv.style.width = '100%';
                                commentDiv.style.boxSizing = 'border-box';

                                commentsGrid.appendChild(commentDiv);
                            });

                            commentsSection.appendChild(commentsGrid);
                            postDiv.appendChild(commentsSection);
                        })
                        .catch(error => console.error('Error fetching comments:', error));

                    postDetailsContainer.appendChild(postDiv);
                });
            })
            .catch(error => console.error('Error fetching posts:', error));
    } else {
        postDetailsContainer.textContent = 'No user ID provided in the URL.';
    }

    // Style the post details container
    postDetailsContainer.style.padding = '20px';
    postDetailsContainer.style.maxWidth = '1200px';
    postDetailsContainer.style.margin = '0 auto';
    postDetailsContainer.style.textAlign = 'center';
};