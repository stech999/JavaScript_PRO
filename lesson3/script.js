// === Task 1 ===
let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            if (randomNumber) {
                resolve(randomNumber);
            } else {
                reject('Ошибка генерации рандомного номера');
            }
        }, 1000)
    });
};

generateRandomNumber()
    .then((number) => {
        console.log(`Сгенерировано случайное число: ${number}`);
    }).catch((error) => {
        console.log(`Ошибка: ${error}`);
    })

// === Task 2 ===
let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(`Ошибка загрузка данных: ${error}`));
    });
}
fetchData('https://rickandmortyapi.com/api/character/359')
    .then((data) => {
        console.log(`Получены данные: ${data.image}`);
    })
    .catch((error) => {
        console.log(`Ошибка: ${error}`);
    })


// === Task 3 ===
let checkIfFileExists = (file) => {

};

let checkFileExists = (file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileExists = checkIfFileExists(file);
            if (fileExists) {
                resolve('файл существует');
            } else {
                reject('файл не найден');
            }
        }, 2000);
    });
};

checkFileExists('example.txt')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })

// === Task 4 ===
let calculateSum = (a, b) => {
    return new Promise((resolve, reject) => {
        const summ = a + b;
        resolve(summ);
    });
};
calculateSum(3, 7)
    .then((result) => {
        console.log(`Сумма чисел: ${result}`);
    })

let divideNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('Невозможно делить на 0');
        } else {
            resolve(a / b);
        }
    });
};

divideNumbers(0, 10)
    .then((result) => {
        console.log(`Результат деления: ${result}`);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    });

// === Task 5 ===
let processData = (data) => {

};

let performOperator = (data) => {
    return new Promise((resolve, reject) => {
        let result = processData(data);

        if (result) {
            resolve(result)
        } else {
            reject('Ошибка')
        }
    }).finally(() => {
        console.log(`Оперция завершена.`);
    })
};

performOperator('example')
    .then((result) => {
        console.log(`Результат: ${result}`);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    });

// === Task 6 ===
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
])
    .then(console.log)
    .catch(console.log);

// === Task 7 ===

// Генераторы — это специальный тип функции, который может приостанавливать своё выполнение, принимать промежуточные данные и продолжать своё выполнение с новыми вводными.
// Сам генератор записывается как функция — выражение со звёздочкой после ключевого слова function. Промежуточные значения могут возвращаться с помощью оператора yield. Само выражение с объявлением генератора не вызывает его, а возвращает специальный объект генератора, с помощью которого мы можем управлять его выполнением.
// Запустить выполнение генератора мы можем с помощью метода next().



// Генератор для генерации последовательности чисел
function* numberGenerator() {
    let number = 1;

    while (true) {
        yield number;
        number++;
    }
}

// Создаем экземпляр генератора
const generator = numberGenerator();

// Генерируем итератор, который будет возвращать следующее число при каждом вызове метода next()
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // 4

// === Task 8 ===

//При разработке сайтов часть информации (например, токен авторизации или данные пользователя) нужно хранить и читать как в браузере, так и на сервере.
// Куки передаются в виде HTTP-заголовка, это накладывает на них ограничения. Например, максимальный размер куки в 4096 байт или отсутствие в содержимом пробелов или запятых. Чтобы обезопасить содержимое, можно закодировать его с помощью функции encodeURIComponent().
//Все куки хранятся в свойстве document.cookie. Это свойство представляет собой строку в формате имя=значение, где пары имён и значений разделяются знаком ; . При этом взаимодействие с полем весьма необычное — если присвоить document.cookie новое значение, то оно не заменит полностью старую строку, а добавит или изменит значение по ключу.



// Напишите функцию setCookie(name, value, days), которая устанавливает cookie с указанным именем, значением и сроком действия в днях

let setCookie = (name, value, days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    let cookieValue = encodeURIComponent(value) + '; expires' + expirationDate.toUTCString;
    document.cookie = name + '=' + cookieValue;

}

setCookie('username', 'Jihn Dow', 7);
setCookie('username2', 'Fill Pops', 2);
setCookie('userinfo', 'Tom Hardy', 5);


// Напишите функцию getCookie(name), которая возвращает значение функции с указанным именем
let getCookie = (name) => {
    let cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

let username = getCookie('username');
console.log('Значение cookie "username":', username);


// Напишите функцию deleteCookie(name), которая удаляет значение функции с указанным именем
let deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

deleteCookie('username2');

// === Task 9 ===

// Уставновка значения в LocalStorage
localStorage.setItem('username', 'Bob');

// Получение значения в LocalStorage
const userStorage = localStorage.getItem('username');
console.log('Значение из LocalStorage: ', userStorage);

// Удаление значения из LocalStorage
localStorage.removeItem('username');

// Проверка, что значение удалено
const userCheckStorage = localStorage.getItem('username');
console.log('Значение из LocalStorage: ', userCheckStorage);

// Очистка LocalStorage
localStorage.clear();

// Проверка, что LocalStorage пустой
console.log("LocalStorage:", localStorage);


//---------------------------------------------------------------------

localStorage.clear();
// Проверяем, есть ли значение счетчика в LocalStorage
if (localStorage.getItem('counter')) {
    // если значение счетчика уже есть, то увеличиваем его на 1
    let counter = parseInt(localStorage.getItem('counter')) + 1;
    localStorage.setItem('counter', counter.toString());
} else {
    localStorage.setItem('counter', 1);
}

console.log('Счетчик посещений: ', localStorage.getItem('counter'));


// Альтернативный вариант:
// Проверяем, есть ли значение счетчика в LocalStorage
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// Обновляем значение счетчика
const updateCounter = () => {
    counter++,
        localStorage.setItem('counter', counter.toString());
}

// Выводим текущее знаяение счетчика на страницу сайта
document.querySelector('.counter').textContent = counter;

// Обработчик события для кнопки "Увеличить счетчик"
document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
});
