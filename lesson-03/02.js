// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
  let even;
  if (number % 2 !== 0) {
    even = false;
  } else {
    even = true;
  }
  return even;
}
