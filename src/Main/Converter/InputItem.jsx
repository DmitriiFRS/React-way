
import change from './images/change.svg';
import DropDown from './DropDown';
import React from 'react';
function InputItem({currency, setCurrency, dataCurrency, currencyValue, setCurrencyValue, setRate, currencyNames, title, active, setActive, disabled}) {
   const [isDropDownActive, setDropDownActive] = React.useState(false);
   function openMenu() {
      setDropDownActive(!isDropDownActive);
      setActive(!active);
   }
   function getCurrency(e) {
      setDropDownActive(false);
      setActive(false);
      currencyNames.forEach(item => {
         if (item.name === e.target.textContent) {
            setCurrency([item.name, item.icon])
         }
      })
   }
   React.useEffect(() => {
      function closeAll(e) {
         if (isDropDownActive && !e.target.matches('.dropDown, .dropDown__item, .interface-item__change, .interface-item__change-container')) {
            setDropDownActive(false);
            setActive(false);
         }
      }
      document.body.addEventListener('click', closeAll);
      return () => {document.body.removeEventListener('click', closeAll)};
   }, [isDropDownActive, active, setActive])
   React.useEffect(() => {
      Object.entries(dataCurrency).forEach(item => {
         if (item[0] === currency[0]) {
            setRate(item[1])
         }
      })
   }, [currency, dataCurrency, setRate])
   return (
      <div className="converter__interface-item  interface-item">
         <p className="interface-item__title">{title}</p>
         <div className="interface-item__main">
            <div className="interface-item__flag-container">
               <img src={currency[1]} alt="flag" className="interface-item__flag" />
            </div>
            <div className="interface-item__country-block">
               <p className="interface-item__country">{currency[0]}</p>
               <div onClick={openMenu} className="interface-item__change-container">
                  <img src={change} alt="change" className="interface-item__change" />
               </div>
            </div>
            <input onInput={(e) => {setCurrencyValue(e.target.value)}} value={currencyValue} disabled={disabled} type="number" className="interface-item__input" />
         </div>
         {isDropDownActive && active && 
         <DropDown 
            getCurrency={getCurrency}
            setDropDownActive={setDropDownActive}
            setActive={setActive}
            currencyNames={currencyNames}
            isDropDownActive={isDropDownActive}
            setDropDown={setDropDownActive}>
         </DropDown>}
      </div>
   )
}
export default InputItem;