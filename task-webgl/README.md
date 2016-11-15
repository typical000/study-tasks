# WebGL (Using three.js library)

Низкоуровневый WebGL давно уже никто не пишет. Потому в данном задании мы будем использовать WebGL на основе библиотеки Three.js

### Задание

Необходимо создать webGL сцену на которой будет изображена сфера с легким внешним свечением и вокруг которой летает самолетик. Скорость вращения можно выбрать произвольную.
Результат должен быть, примерно, таким:

![webGL Planet](https://github.com/typical000/study-tasks/blob/master/task-webgl/assets/result-preview.jpg?raw=true "webGL Planet")

Т.к. данное задание является очень сложным в понимании и охватывает совсем новый раздел JS, приводим порядок действий в вашем коде:

1. Создать WebGL рендер (см. `THREE.WebGLRenderer()`), сцену, камеру
2. Загрузить текстуры (планеты, самолетика. см. `THREE.LoadingManager`)
3. Нарисовать планету
   - Создать геометрию (примитив, см. `THREE.SphereGeometry`)
   - Создать материал (использовать `ssets/planet-texture.png`)
   - Создать "мэш" используя материал и геометрию
   - Добавить свечение в виде шейдера (подсмотреть можно [здесь](http://stemkoski.github.io/Three.js/Atmosphere.html)). Здесь используется вершинный и фрагментные шейдеры, больше информации о них можно найти в разделе литература (в данном задании не стоит писать свои шейдеры, это GLSL язык, Си-подобный. Просто возьмите шейдеры как они есть здесь `js/glowShader.fs` и `js/glowShader.vs`)
   - Поместить планету на сцену
4. Нарисовать самолетик
   - Создать геометрию (т.к. у нас нет 3D-редактора под рукой, а это довольно простая геометрия, можно создать на уровне кода ее)
     * Создать вершины (cм. массив vertices объекта `THREE.Geometry`)
     * Используя каждую тройку вершин, создать треугольники (они же "полигоны") (см. массив faces)
     * Создать "развертку текстуры" (см. массив faceVertexUvs) (больше можно узнать [здесь (см. UV Mapping, на примере с Three.js)](http://solutiondesign.com/blog/-/blogs/webgl-and-three-js-texture-mappi-1/), в целом что такое [UV-преобразование](https://ru.wikipedia.org/wiki/UV-%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5))
   - Создать материал (использовать сплошной цвет)
   - Создать "мэш" используя материал и геометрию
5. Нарисовать "хвост" самолетика (в дейтсвительности, это просто-напросто, очень большое кол-во одинаковых "particle"-элементов с постепенно уменьшающейся прозрачностью и размером)
   - В цикле создать "particle" (см. `THREE.Sprite()`), применить к нему материал (можно использовать картинку из `assets/particle.png` или сформировать ее динамически в отдельном контексте canvas'a)
   - Разместить "particle" по окружности
   - Добавить "хвост" к объекту самолетика
   - Поместить самолетик с "хвостом" на сцену
6. Создать бесконечный цикл рендера с помощью `requestAnimationFrame()` (аналогично как в уроке с Canvas)

### Литература:
- [WebGL on Mozilla Developer Network](https://developer.mozilla.org/ru/docs/Web/API/WebGL_API)
- [Основы WebGL (без Three.js)](http://webglfundamentals.org/webgl/lessons/ru/index.html)
- [Изучаем Three.js. Глава 1](https://habrahabr.ru/post/224509/)
- [Изучаем Three.js. Глава 2](https://habrahabr.ru/post/225199/)
- [Блог о WebGL + Three.js](http://manfrid-code.ru/)
- [Getting Started with Three.js](https://aerotwist.com/tutorials/getting-started-with-three-js/)
- [Create particles with Three.js](https://aerotwist.com/tutorials/creating-particles-with-three-js/)
- [How to create a planet in Three.js](http://learningthreejs.com/blog/2013/09/16/how-to-make-the-earth-in-webgl/)

