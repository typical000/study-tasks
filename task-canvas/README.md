# Canvas

### Задание

Реализовать холст для рисования курсором мышки точек с разными цветами, разной степенью прозрачности и разным размером.

Пользователь должен иметь возможность:

1. Изменять цвет
2. Изменять жесткость точки (как в Photoshop. По краям точки присутствует [прозрачность (эффект размырия)](https://i.stack.imgur.com/6teqB.png). 0 = размытие начинается с центра точки, 1 = точка представляет собой полностью залитую окружность)
3. Изменять прозрачность точки
4. Холст должен поддерживать 2 действия:
  - Очистить холст
  - Сохранить (предлагает сохранить canvas в файл)

Началом рисования можно считать события mousedown и touchstart.
Концом рисования можно считать события mouseup и touchend.

*Примечание: если при быстром движении мышки у вас будет получаться набор точек а не сплошная линия - не беспокойтесь об этом :) Конечно, можете попробовать, будет вам "+" в карму*

### Литература:
- [Canvas API](https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial)
- [Canvas. Шаг за шагом](https://habrahabr.ru/post/111308/)
- [Canvas tutorials](http://www.html5canvastutorials.com/)
- [Canvas W3C](http://www.w3schools.com/html/html5_canvas.asp)
