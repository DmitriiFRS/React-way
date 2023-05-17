import EUR from './Main/Converter/images/EUR.svg';
import USD from './Main/Converter/images/USD.svg';
import SGD from './Main/Converter/images/SGD.svg';
import RUB from './Main/Converter/images/RUB.svg';
let services = {
  quiz: [
    {
      title: 'Что такое React?',
      variants: ['Библиотека', 'Фрэймворк', 'Язык программирования'],
      correct: 0
    },
    {
      title: 'Что такое JSX?',
      variants: ['Язык программирования', 'Формат данных', 'Синтаксический сахар'],
      correct: 2
    },
    {
      title: 'Что такое Virtual DOM?',
      variants: ['Виртуальный браузер', 'Виртуальная база данных', 'Виртуальное представление DOM'],
      correct: 2
    },
    {
      title: 'Что такое Redux?',
      variants: ['Библиотека управления состоянием', 'Фрэймворк для создания SPA', 'Язык программирования'],
      correct: 0
    },
    {
      title: 'Что такое алгоритм?',
      variants: ['Способ решения задачи', 'Язык программирования', 'Система управления базами данных'],
      correct: 0
    },
    {
      title: 'Что такое MVC?',
      variants: ['Модель-Вид-Контроллер', 'Модуль-Вид-Компонент', 'Модель-Вид-Сервер'],
      correct: 0
    },
    {
      title: 'Что такое Git?',
      variants: ['Система контроля версий', 'Язык программирования', 'Фрэймворк'],
      correct: 0
    },
    {
      title: 'Что такое SQL?',
      variants: ['Язык программирования', 'Система управления базами данных', 'Протокол передачи данных'],
      correct: 1
    },
    {
      title: 'Что такое REST API?',
      variants: ['Протокол передачи данных', 'Архитектурный стиль', 'База данных'],
      correct: 1
    },
  ],
  currency: [
    {
      name: 'USD',
      icon: USD
    },
    {
      name: 'SGD',
      icon: SGD
    },
    {
      name: 'EUR',
      icon: EUR
    },
    {
      name: 'RUB',
      icon: RUB
    }
  ]
}
export default services;
