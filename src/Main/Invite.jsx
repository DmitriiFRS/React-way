import  './App.scss';
import './Null.css';
import React from 'react';
import glass from './loupe.svg';
import plus from './plus.svg';
import Skeleton from './Utilities/Skeleton';
function Invite() {
   const [users, setUsers] = React.useState('');
   const [isLoaded, setLoad] = React.useState(false);
   React.useEffect(() => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(data => {
         setUsers(data.data);
         setLoad(true)})
      .catch(() => alert('Данные не загружены'))
   }, [])
   console.log(users)
   return(
      <div className='container'>
         <div className="invite-app">
            <div className="invite-app__body">
               <div className="invite-app__input">
                  <img src={glass} alt="" className="invite-app__loop" />
                  <input placeholder='Поиск...' type="text" className="invite-app__input-field" />
               </div>
               <div className="invite-app__users">
                  {isLoaded && users.map((item, index) => {
                     return (
                        <div key={index} className="invite-app__user">
                           <img src={item.avatar} alt="avatar" className="invite-app__img" />
                           <div className="invite-app__name-block">
                              <h2 className="invite-app__name">{item.first_name} {item.last_name}</h2>
                              <p className="invite-app__email">{item.email}</p>
                           </div>
                           <img src={plus} alt="add" className="invite-app__add" />
                        </div>
                     )
                  })}
               </div>
               <button className="invite-app__btn">Отправить</button>
            </div>
         </div>
         <Skeleton />
      </div>
   )
}
export default Invite;