import React from 'react';
import '../../Main/App.scss';
import replace from './images/replace.svg';
import InputItem from './InputItem';
function Converter({currencyNames}) {
   const settings = ['disabled', ''];
   const title = ['Amount', 'Converted Amount'];
   const [dataCurrency, setDataCurrency] = React.useState('');
   const [Active1, setActive1] = React.useState(false);
   const [Active2, setActive2] = React.useState(false);
   const [rate1, setRate1] = React.useState(0);
   const [rate2, setRate2] = React.useState(0);
   const [inputValue, setInputValue] = React.useState('');
   const [outputValue, setOutputValue] = React.useState('');
   React.useEffect(() => {
      fetch('https://api.freecurrencyapi.com/v1/latest?apikey=9iK6i08cBV5rNIDPOACRwikSuRDXTSSkrbqdmAZ2')
      .then(resp => resp.json())
      .then(data => setDataCurrency(data.data))
   }, [])
   React.useEffect(() => {
      setOutputValue((inputValue * rate2 / rate1).toFixed(2))
   }, [inputValue, rate1, rate2])
   return(
      <section className="converter container">
         <h2 className="converter__title">Currency Converter</h2>
         <p className="converter__subtitle title">Check live rates, set rate alerts, receive notifications and more.</p>
         <div className="converter__interface">
            <InputItem setRate={setRate1}
               currencyValue={inputValue}
               setCurrencyValue={setInputValue}
               dataCurrency={dataCurrency}
               disabled={settings[1]} 
               active={Active1} 
               setActive={setActive1} 
               currencyNames={currencyNames} 
               title={title[0]}>
            </InputItem>
            <div className="interface-item__separator-container">
               <div className="interface-item__separator"></div>
               <div className="interface-item__replace">
                  <img src={replace} alt="swap" />
               </div>
            </div>
            <InputItem setRate={setRate2}
               currencyValue={outputValue}
               dataCurrency={dataCurrency}
               disabled={settings[0]}
               active={Active2}
               setActive={setActive2}
               currencyNames={currencyNames}
               title={title[1]}>
            </InputItem>
         </div>
         <div className="converter__exchange-rate-body">
            <h3 className="converter__exchange-rate-title title">Indicative Exchange Rate</h3>
            <p className="converter__exchange-rate-result">1 SGD = 0.7367 USD</p>
         </div>
      </section>
   )
}
export default Converter;