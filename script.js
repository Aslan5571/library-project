// Получаем элементы
const showFormBtn = document.getElementById('show-form-btn');
const bookForm = document.getElementById('book-form');

// Добавляем событие на кнопку "Добавить книгу"
showFormBtn.addEventListener('click', () => {
    // Скрываем кнопку и показываем форму
    showFormBtn.style.display = 'none';
    bookForm.style.display = 'block';
});