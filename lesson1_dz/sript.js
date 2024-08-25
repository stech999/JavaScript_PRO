// Урок 1. Коллекции и итераторы.Модули
// Формат сдачи: ссылка на репозиторий.


//     Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать.Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство - символ Symbol.iterator.Каждый альбом имеет следующую структуру:

// {
//     title: "Название альбома",
//         artist: "Исполнитель",
//             year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection.Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель(Год выпуска)

console.log('=== DZ 1 ===');

let musicCollection =
{
    albums: [
        {
            title: "Название альбома",
            artist: "Исполнитель",
            year: "Год выпуска"
        }
    ]
}

musicCollection[Symbol.iterator] = function () {
    let index = 0;
    return {
        next: () => {
            if (index < this.albums.length) {
                return { value: this.albums[index++], done: false };
            } else {
                return { done: true };
            }
        }
    };
};

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist}(${album.year})`);
}

console.log('=== DZ 2 ===');

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах.Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента.В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
//     Ольга - специализация: Суши.
//         Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
//     Пицца "Пепперони" - повар: Виктор.
//         Суши "Филадельфия" - повар: Ольга.
//             Суши "Калифорния" - повар: Ольга.
//                 Тирамису - повар: Дмитрий.
//                     Чизкейк - повар: Дмитрий.

//                         Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const Viktor = { name: 'Виктор', specialization: 'Пицца' };
const Olga = { name: 'Ольга', specialization: 'Суши' };
const Dmitry = { name: 'Дмитрий', specialization: 'Десерты' };

const margaritaPizza = { name: 'Пицца "Маргарита"', cook: Viktor };
const pepperoniPizza = { name: 'Пицца "Пепперони"', cook: Viktor };
const philadelphiaSushi = { name: 'Суши "Филадельфия"', cook: Olga };
const californiaSushi = { name: 'Суши "Калифорния"', cook: Olga };
const tiramisu = { name: 'Тирамису', cook: Dmitry };
const cheesecake = { name: 'Чизкейк', cook: Dmitry };

const dishes = new Map();
dishes.set(margaritaPizza.name, margaritaPizza);
dishes.set(pepperoniPizza.name, pepperoniPizza);
dishes.set(philadelphiaSushi.name, philadelphiaSushi);
dishes.set(californiaSushi.name, californiaSushi);
dishes.set(tiramisu.name, tiramisu);
dishes.set(cheesecake.name, cheesecake);

const orders = new Map();

const Alexey = { name: 'Алексей' };
orders.set(Alexey, [pepperoniPizza, tiramisu]);

const Maria = { name: 'Мария' };
orders.set(Maria, [californiaSushi, margaritaPizza]);

const Irina = { name: 'Ирина' };
orders.set(Irina, [cheesecake]);

function displayOrders() {
    for (const [client, dishes] of orders) {
        console.log(`Заказ ${client.name}:`);
        for (const dish of dishes) {
            console.log(`  - ${dish.name} (готовит ${dish.cook.name})`);
        }
    }
}

displayOrders();