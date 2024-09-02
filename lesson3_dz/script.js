// Урок 3. Промисы.Хранилище
// Создайте интерактивную веб - страницу для оставления и просмотра отзывов о продуктах.Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
//     Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва(при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const nameProductEl = document.querySelector('.nameProduct');
const feedbackProductEl = document.querySelector('.feedbackProduct');
const btnFbEl = document.querySelector('.btnFb');
const viewFeedbackEl = document.querySelector('.viewFeedback');

btnFbEl.addEventListener('click', function () {
    function addFeedback(key, value) {
        if (key) {
            let getValue = JSON.parse(localStorage.getItem(key)) || [];
            getValue.push(value);
            localStorage.setItem(key, JSON.stringify(getValue));
        } else {
            localStorage.setItem(nameProductEl.value, feedbackProductEl.value);
        }
    }
    addFeedback(nameProductEl.value, feedbackProductEl.value);
    viewValue();
});

function viewValue() {
    viewFeedbackEl.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const values = JSON.parse(localStorage.getItem(key)) || [];

        values.forEach((value, index) => {
            const feedbackHTML = `
                <div class="nameProductStyle">Наименование продукта:</div>
                <div class="nameStyle">${key}</div>
                <div class="namefeedbackStyle">Отзыв о продукте：</div>
                <div class="feedbackStyle">${value}</div>
                <button class="deleteBtn" data-key="${key}" data-index="${index}">Удалить</button>
            `;
            viewFeedbackEl.insertAdjacentHTML('beforeend', feedbackHTML);
        });
    }

    document.querySelectorAll('.deleteBtn').forEach(button => {
        button.addEventListener('click', function () {
            const key = this.getAttribute('data-key');
            const index = parseInt(this.getAttribute('data-index'), 10);
            removeFeedback(key, index);
            viewValue();
        });
    });
}

function removeFeedback(key, indexToRemove) {
    let values = JSON.parse(localStorage.getItem(key)) || [];

    if (indexToRemove !== -1) {
        values.splice(indexToRemove, 1);
    }

    localStorage.setItem(key, JSON.stringify(values));
}
viewValue();