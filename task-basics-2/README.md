# Basics (2)

## Изучение структур данных JS. Работа с объектами, массивами

Реализовать объект Mathematics с методами и константами.
Что должен включать в себя этот объект:

1. Mathematics.pow(a, b) - возведение числа A в степень B
2. Mathematics.min(array) - принимает как аргумент - массив, возвращает минимальное число, что входит в массив. Реализовать проверку и выброс ошибки в случае если элемент массива - не число (строка, boolean, etc.)
3. Mathermatics.max(array) - аналогично, возвращает максимальное число
2. Mathematics.factorial(a) - вычисление факториала числа A
3. Mathematics.PI - константа объекта, возвращает число 3.141592653589793

Критерий проверки:
```
console.log(Mathematics.pow(2, 3)); // 8
console.log(Mathematics.min([25, 2, 55, 15])); // 2
console.log(Mathematics.max([25, 2, 55, 15])); // 55
console.log(Mathematics.max([25, 'foo'])); // ERROR: Not a number
console.log(Mathermatics.factorial(5)); // 120
console.log(Mathematics.PI); // 3.141592653589793
```

Критерий приемки:
1. Код должен быть написан на ES6
1. В коде не должно быть упоминаний или использований встроеной библиотеки Math

### Литература
http://learn.javascript.ru/data-structures