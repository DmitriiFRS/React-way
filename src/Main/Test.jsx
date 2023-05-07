import  './App.scss';
import './Null.css';
import React from 'react';
function Test(props) {
   let percentage = 100 / props.test.length;
   const [indicatorPercentage, setIndicatorPercentage] = React.useState(0);
   const [total, setTotal] = React.useState(0);
   function check(index) {
      props.setQuestion(props.question + 1);
      setIndicatorPercentage(indicatorPercentage + percentage);
       if (props.test[props.question].correct === index) setTotal(total + 1);
   }
   return(
      <div className="test container">
         <div className="test__body">
            {props.test.length <=  props.question ? (
            <> 
            <h2 className='test__end'>Тест окончен</h2>
            <p className='test__title-end'>Вы ответили правильно на {total} Вопросов из {props.test.length}</p>
            </>
            ) : (
            <>
            <div style={{width: indicatorPercentage + '%'}} className="test__indicator"></div>
            <h1 className="test__title">{props.test[props.question].title}</h1>
            <ul className="test__variants-body">
               {props.test[props.question].variants.map((item,index) => { 
               return <li onClick={() => {check(index)}} className="test__variants-item" key={index}>{item}</li> })}
            </ul>
            </>)}
            

        </div>
      </div>
   )
}
export default Test;