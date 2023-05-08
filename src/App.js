import React from 'react';
import  './Main/App.scss';
import './Main/Null.css';
import Test from './Main/Test';
function App() {

  const test = [
    {
      title: 'Что такое React?',
      variants: ['Библиотека', 'Фрэймворк', 'Космический спутник'],
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
      title: 'Что такое HOC?',
      variants: ['Высокий порядок компонентов', 'Высокий порядок функций', 'Высокий порядок классов'],
      correct: 0
    }
  ];
  const [question, setQuestion] = React.useState(0);
  return (
    <div className="wrapper">
      <Test test={test} question={question} setQuestion={setQuestion} />
      Ветка 01
    </div>
  );
}

export default App;
