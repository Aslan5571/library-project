// Получаем элементы
const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const commentInput = document.getElementById('comment'); // Добавляем переменную для комментария
const booksList = document.getElementById('books-list');

// Слушаем событие на форме для добавления книги
bookForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить перезагрузку страницы

    // Получаем значения из полей формы
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const comment = commentInput.value; // Получаем комментарий

    // Создаем новый элемент для книги
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book'); // Добавим класс для стилизации

    // Получаем текущую дату
    const currentDate = new Date().toLocaleDateString();

    // Заполняем информацию о книге
    bookDiv.innerHTML = `
        <strong>Название:</strong> ${title} <br>
        <strong>Автор:</strong> ${author} <br>
        <strong>Количество страниц:</strong> ${pages} <br>
        <strong>Дата добавления:</strong> ${currentDate} <br>
        <strong>Комментарий:</strong> ${comment} <br>
        <button class="delete-button">Удалить</button>
    `;

    // Добавляем книгу в список
    booksList.appendChild(bookDiv);

    // Очищаем поля формы
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    commentInput.value = ''; // Очищаем поле комментария

    // Добавляем функциональность для кнопки удаления
    const deleteButton = bookDiv.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        bookDiv.remove(); // Удаляем книгу из списка
    });
});
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}














