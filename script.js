// Получаем элементы
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

    // Получаем текущую дату
    const currentDate = new Date().toLocaleDateString();

    // Заполняем информацию о книге
    bookDiv.innerHTML = `
        <strong>Название:</strong> ${title} <br>
        <strong>Автор:</strong> ${author} <br>
        <strong>Количество страниц:</strong> ${pages} <br>
        <strong>Дата добавления:</strong> ${currentDate} <br>
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

document.getElementById('theme-toggle').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
});

// Устанавливаем начальную тему
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light-theme');
} else {
    document.body.classList.add(localStorage.getItem('theme'));
}

// Сохраняем выбор пользователя
document.getElementById('theme-toggle').addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.setItem('theme', 'light-theme');
    }
});