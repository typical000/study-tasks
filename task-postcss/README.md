# PostCSS plugin

### Задание

Реализовать плагин PostCSS для поддержки дефолтовых единиц измерений. Подход в данном задании - TDD (Сначала тесты, потом код)

На входе мы должны передавать CSS без единиц измерения:
`````````````````````css
.foo {
  color: red;
  width: 20;
  padding: 5 10 0;
}
@media (max-width: 800px) {
  .foo {
    width: 10
  }
}
`````````````````````
На выходе, должны добавляться единицы измерения:
`````````````````````css
.foo {
  color: red;
  width: 20px;
  padding: 5px 10px 0;
}
@media (max-width: 800px) {
  .foo {
    width: 10px
  }
}
`````````````````````

Как основу, можно использовать данный конфиг с правилами для пар "свойство - дефолтавая единица измерения"
`````````````````````js
export default {
  'animation-delay': 'ms',
  'animation-duration': 'ms',
  'background-position-x': 'px',
  'background-position-y': 'px',
  'background-size': 'px',
  'border': 'px',
  'border-bottom': 'px',
  'border-bottom-left-radius': 'px',
  'border-bottom-right-radius': 'px',
  'border-bottom-width': 'px',
  'border-left': 'px',
  'border-left-width': 'px',
  'border-radius': 'px',
  'border-right': 'px',
  'border-right-width': 'px',
  'border-spacing': 'px',
  'border-top': 'px',
  'border-top-left-radius': 'px',
  'border-top-right-radius': 'px',
  'border-top-width': 'px',
  'border-width': 'px',
  'border-after-width': 'px',
  'border-before-width': 'px',
  'border-end-width': 'px',
  'border-horizontal-spacing': 'px',
  'border-start-width': 'px',
  'border-vertical-spacing': 'px',
  'bottom': 'px',
  'column-gap': 'px',
  'column-rule': 'px',
  'column-rule-width': 'px',
  'column-width': 'px',
  'flex-basis': 'px',
  'font-size': 'px',
  'font-size-delta': 'px',
  'height': 'px',
  'left': 'px',
  'letter-spacing': 'px',
  'logical-height': 'px',
  'logical-width': 'px',
  'margin': 'px',
  'margin-after': 'px',
  'margin-before': 'px',
  'margin-bottom': 'px',
  'margin-left': 'px',
  'margin-right': 'px',
  'margin-top': 'px',
  'max-height': 'px',
  'max-width': 'px',
  'margin-end': 'px',
  'margin-start': 'px',
  'mask-position-x': 'px',
  'mask-position-y': 'px',
  'mask-size': 'px',
  'max-logical-height': 'px',
  'max-logical-width': 'px',
  'min-height': 'px',
  'min-width': 'px',
  'min-logical-height': 'px',
  'min-logical-width': 'px',
  'motion': 'px',
  'motion-offset': 'px',
  'outline': 'px',
  'outline-offset': 'px',
  'outline-width': 'px',
  'padding': 'px',
  'padding-bottom': 'px',
  'padding-left': 'px',
  'padding-right': 'px',
  'padding-top': 'px',
  'padding-after': 'px',
  'padding-before': 'px',
  'padding-end': 'px',
  'padding-start': 'px',
  'perspective-origin-x': '%',
  'perspective-origin-y': '%',
  'perspective': 'px',
  'right': 'px',
  'shape-margin': 'px',
  'size': 'px',
  'text-indent': 'px',
  'text-stroke': 'px',
  'text-stroke-width': 'px',
  'top': 'px',
  'transform-origin': '%',
  'transform-origin-x': '%',
  'transform-origin-y': '%',
  'transform-origin-z': '%',
  'transition-delay': 'ms',
  'transition-duration': 'ms',
  'vertical-align': 'px',
  'width': 'px',
  'word-spacing': 'px'
}
`````````````````````

Также:

1. Плагин должен быть конфигурируемым. Т.е. при использовании с postcss мы должны иметь возможность передать параметр в виде объекта что будет расширять базовый набор правил (Т.о., например, мы можем передать параметры, и сменить для некоторых свойств дефлотовые 'px' на 'rem')
2. Плагин должен удовлетворять Unit-тестам. (**npm run test**, см. packages.json)
3. Плагин не должен иметь ошибок eslint'a (**npm run lint**, см. packages.json). В данном случае использовался набор правил компании airbnb (43 200 звезд на github на момент использования)

### Литература:
- [PostCSS Official Documentation about creating plugins](https://github.com/postcss/postcss/blob/master/docs/writing-a-plugin.md)
- [PostCSS Plugin Boilerplate](https://github.com/postcss/postcss-plugin-boilerplate)
- [CSS-Tricks. Want Make postcss plugin](https://css-tricks.com/want-make-postcss-plugin/)
- [Автоматические тесты при помощи chai и mocha](https://learn.javascript.ru/testing)
- [ESlint ES5 airbnb](https://github.com/airbnb/javascript/tree/es5-deprecated/es5)
- [ESlint airbnb перевод (для слабых в инглише)](https://github.com/uprock/javascript)
