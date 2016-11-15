# jQuery plugins

### Задание

Реализовать плагин слайдера.
Инициализация:

1. Должен инициализироваться без параметров
2. Должен принимать параметры

Опции что можно передать в объект:

1. **items** - кол-во слайдов что отображается во вьюпорте (т.е. если items = 1 - это типичный слайдер, если больше - карусель, default = 1)
2. **interval** - интервал времени (в мс) между сменой слайдов (default = 3000)
3. **loop** - по достижению последнего слайда, сладер возвращается на 1-ю позицию и т.о. бесконечно перелистывается (принимает true или false. default = false)
4. **callback** - функция, что срабатывает при каждой смене слайда. (default - пустая фунция - function(){}). Единственным аргументом что передается функции - текущий слайд (число от 0 до N)

Должен иметь API. В данном случае необходимо реализовать метод getSlidesCount что возвращает кол-во слайдов в слайдере (число). Т.е.
``````````````````````js
var $slider = $('#slider').slider();
$slider.getSlidesCount(); // Должно вернуть число
``````````````````````

В файле index.html уже инициализированы слайдеры с необходимыми параметрами для проверки.

### Литература:
- [Basic plugin creation. Learn jQuery](https://learn.jquery.com/plugins/basic-plugin-creation/)
- [Advanced plugin concepts](https://learn.jquery.com/plugins/advanced-plugin-concepts/)
- [How to develop a jQuery plugin. SitePoint](https://www.sitepoint.com/how-to-develop-a-jquery-plugin/)
- [Пишем плагин jQuery](https://habrahabr.ru/post/158235/)
- [Еще пишем плагин](http://xdan.ru/Kak-napisat-plagin-na-jQuery.html#events)
- [jQuery API](http://api.jquery.com/)
- [Performance tips](https://learn.jquery.com/performance/)
