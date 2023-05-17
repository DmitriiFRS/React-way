
function DropDown({currencyNames, setDropDownActive, setActive, getCurrency}) {
   return(
      <div className="dropDown">
         <ul className="dropDown__list">
            {currencyNames.map((item, index) => {
               return <li onClick={getCurrency} key={index} className="dropDown__item">{item.name}</li>
            })}
         </ul>
      </div>
   )
}
export default DropDown;