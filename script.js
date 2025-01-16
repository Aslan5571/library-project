// Получаем элементы
// Получаем элементы из DOM
const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const booksList = document.getElementById('books-list');

// Слушаем событие на форме для добавления книги
bookForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить перезагрузку страницы

    // Получаем значения из полей формы
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;

    // Создаем новый элемент для книги
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book'); // Добавим класс для стилизации

    // Заполняем информацию о книге
    bookDiv.innerHTML = `
        <strong>Название:</strong> ${title} <br>
        <strong>Автор:</strong> ${author} <br>
        <strong>Количество страниц:</strong> ${pages} <br>
        <button class="delete-button">Удалить</button>
    `;

    // Добавляем книгу в список
    booksList.appendChild(bookDiv);

    // Очищаем поля формы
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';

    // Добавляем функциональность для кнопки удаления
    const deleteButton = bookDiv.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        bookDiv.remove(); // Удаляем книгу из списка
    });
});