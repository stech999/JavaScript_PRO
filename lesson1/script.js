const symbol = Symbol();
let dogId = Symbol('dog');

let buddy = {
    [dogId]: 'hello'
}

console.log(buddy[dogId]);
buddy[dogId] = 'bai';
console.log(buddy[dogId]);

let sym = Symbol.for('name');
let sym2 = Symbol.for('id');

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));

const string = 'hello';
console.log(string[2]);
console.log(string.length);

for (const str of string) {
    console.log(str);
}

let range = {
    from: 1,
    to: 10
}
range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,

        next() {
            return this.current <= this.last ? { done: false, value: this.current++ } : { done: true };
        }
    };
};

for (const number of range) {
    console.log(number);
}

// new Map() — создаёт коллекцию
// ● map.set(key, value) — записывает по ключу key значение value
// ● map.get(key) — возвращает значение по ключу или undefined, если ключ key
// отсутствует
// ● map.has(key) — возвращает true, если ключ key присутствует в коллекции, иначе
// false
// ● map.delete(key) — удаляет элемент(пару «ключ / значение») по ключу key
// ● map.clear() — очищает коллекцию от всех элементов
// ● map.size — возвращает текущее количество элементов
// Перебор коллекции Map
// В коллекцию map перебор происходит в том же порядке, в каком добавлялись
// элементы
// Для перебора коллекции Map есть 4 метода:
// ● map.keys() — возвращает итерируемый объект по ключам
// ● map.values() — возвращает итерируемый объект по значениям
// ● map.entries() — возвращает итерируемый объект по парам вида[ключ,
//     значение], этот вариант используется по умолчанию в for (..of..)
// ● map.forEach() — итератор, работающий так же, как и с массивом

let map = new Map();
map.set("1", "hello")
    .set("id", "ohhh");

console.log(map.get('1') + map.get('id'));

let recipeMap = new Map([
    ["h1", "500"],
    ["h2", "300"],
    ["h3", "700"]
]);
console.log(recipeMap);

for (const vegetable of recipeMap.keys()) {
  console.log(vegetable);
}
for (const amount of recipeMap.values()) {
    console.log(amount);
}
for (const entry of recipeMap) {
    console.log(entry);
}
recipeMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Set
// Объект Set — это особый вид коллекции: «множество» значений(без ключей), где
// каждое значение может появляться только один раз.
// Его основные методы это:
// ● new Set(iterable) — создаёт Set, и если в качестве аргумента был предоставлен
// итерируемый объект(обычно это массив), то копирует его значения в новый Set
// ● set.add(value) — добавляет значение(если оно уже есть, то ничего не делает),
//     возвращает тот же объект set
// ● set.delete(value) — удаляет значение, возвращает true, если value было во
// множестве на момент вызова, иначе false
// ● set.has(value) — возвращает true, если значение присутствует во множестве,
//     иначе false
// ● set.clear() — удаляет все имеющиеся значения
// ● set.size — возвращает количество элементов во множестве

let buddies = [
    'fffff',
    'fffff3',
    'fffff4',
    'fff6ff',
    'fffff',
    'fffdf',
    'ff78fff',
    'ff12fff',
]
let uniqueBuddies = new Set(buddies);
console.log(uniqueBuddies);

let arr = Array.from(uniqueBuddies);
console.log(arr);