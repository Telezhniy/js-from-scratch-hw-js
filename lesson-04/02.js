/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
function includesElement(array, element) {
  let el;
  let answer = false;
  for (let i = 0; i < array.length; i++) {
    el = array[i];
    if (el === element) {
      answer = true;
    }
  }
  return answer;
}
function findUniqueElements(array) {
  newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];

    let index = includesElement(newArray, element1);

    if (!index) {
      newArray.push(element1);
    }
  }
  return newArray;
}
