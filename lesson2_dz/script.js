// Урок 2. Продвинутая работа с функциями и классами
// Задание 1
// Представьте, что у вас есть класс для управления библиотекой.В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список.Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг(массив) в качестве аргумента.Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books;

    constructor(checkBooks = []) {
        if (new Set(checkBooks).size !== checkBooks.length) {
            throw new Error("содержит дубликаты");
        }
        this.#books = checkBooks;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Книга "${title}" с таким названием уже существует в списке.`);
        }
        this.#books.push(title);
    }

    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error(`Книга "${title}" с таким названием нет в списке.`);
        }
        this.#books.splice(index, 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

// Пример использования:
try {
    const library = new Library(["Book1", "Book2", "Book3"]);
    console.log(library.allBooks);

    library.addBook("Book4");
    console.log(library.allBooks);

    library.removeBook("Book2");
    console.log(library.allBooks);

    console.log(library.hasBook("Book3")); // true
    console.log(library.hasBook("Book2")); // false

    library.addBook("Book4");
} catch (error) {
    console.error(error.message);
}



//     Задание 2
// Вы разрабатываете систему отзывов для вашего веб - сайта.Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML - структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

// const initialData = [
//     {
//         product: "Apple iPhone 13",
//         reviews: [
//             {
//                 id: "1",
//                 text: "Отличный телефон! Батарея держится долго.",
//             },
//             {
//                 id: "2",
//                 text: "Камера супер, фото выглядят просто потрясающе.",
//             },
//         ],
//     },
//     {
//         product: "Samsung Galaxy Z Fold 3",
//         reviews: [
//             {
//                 id: "3",
//                 text: "Интересный дизайн, но дорогой.",
//             },
//         ],
//     },
//     {
//         product: "Sony PlayStation 5",
//         reviews: [
//             {
//                 id: "4",
//                 text: "Люблю играть на PS5, графика на высоте.",
//             },
//         ],
//     },
// ];

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

function viewReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    initialData.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h3>${product.product}</h3>`;
        product.reviews.forEach(review => {
            const reviewParagraph = document.createElement('p');
            reviewParagraph.textContent = review.text;
            productDiv.appendChild(reviewParagraph);
        });
        reviewsContainer.appendChild(productDiv);
    });
}

function addReview(text) {
    if (text.length < 50 || text.length > 500) {
        throw new Error(`Вы ввели ${text.length} нужно не менее 50 или более 500 символов`);
    }
    const reviewsContainer = document.getElementById('reviewsContainer');
    const reviewParagraph = document.createElement('p');
    reviewParagraph.textContent = text;
    reviewsContainer.appendChild(reviewParagraph);
}

document.getElementById('submitReview').addEventListener('click', () => {
    const reviewInput = document.getElementById('reviewInput');
    try {
        addReview(reviewInput.value);
        reviewInput.value = '';
    } catch (error) {
        alert(error.message);
    }
});

function countView(count) {
    const countTextEl = document.querySelector('.countText');
    reviewInput.addEventListener('input', function () {
        countTextEl.textContent = `${count}`;
    });
}

viewReviews();