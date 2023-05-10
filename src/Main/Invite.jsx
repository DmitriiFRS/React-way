import  './App.scss';
import './Null.css';
import React from 'react';
import glass from './icons/loupe.svg';
import Skeleton from './Utilities/Skeleton';
import minus from './icons/minus.svg';
import plus from './icons/plus.svg';
import InvitePopup from './Utilities/InvitePopup';
function Invite() {

   const [users, setUsers] = React.useState('');
   const [isLoaded, setLoad] = React.useState(false);
   const [input, setInput] = React.useState('');
   const [invited, setInvite] = React.useState([]);
   const [isModalActive, setModalStatus] = React.useState(false);
   const [invitedCopy, setInviteCopy] = React.useState([]);
   const sendBtn = React.useRef();
   React.useEffect(() => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(data => {
         console.log(data.data)
         setUsers(data.data);
         setLoad(true)})
      .catch(() => alert('Данные не загружены'))
   }, [])
   function throwInvite(user) {
      if (invited.includes(user.id)) {
         setInvite(invited.filter(item => item !== user.id ))
      }
      else 
      setInvite([...invited, user.id]);
   }
   function openPopup() {
      setModalStatus(!isModalActive);
      if (!isModalActive) {
         setInviteCopy(invited);
         setInvite([]);
      }
   }
   return(
      <div className='container'>
         <div className="invite-app">
            <div className="invite-app__body">
               <div className="invite-app__input">
                  <img src={glass} alt="" className="invite-app__loop" />
                  <input onInput={(e) => setInput(e.target.value)} placeholder='Поиск...' type="text" className="invite-app__input-field" />
               </div>
               <InvitePopup openPopup={openPopup} modalActive={isModalActive} usersNum={invitedCopy.length}/>
               <div className="invite-app__users">
                  {!isLoaded ? 
                  <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  </>
                   : users.filter(item => {
                     let fullname = item.first_name.toLowerCase() + ' ' + item.last_name.toLowerCase();
                     return fullname.includes(input.toLowerCase());
                   }).map((item, index) => {
                     return (
                        <div key={index} className="invite-app__user">
                           <img src={item.avatar} alt="avatar" className="invite-app__img" />
                           <div className="invite-app__name-block">
                              <h2 className="invite-app__name">{item.first_name} {item.last_name}</h2>
                              <p className="invite-app__email">{item.email}</p>
                           </div>
                           <img onClick={() => {throwInvite(item)}} src={invited.includes(item.id) ? minus : plus} alt="add" className="invite-app__add" />
                        </div>
                     )
                  })}
               </div>
               <button ref={sendBtn} onClick={openPopup} style={invited.length !== 0 ? {display: 'inline'} : {display: 'none'}} className="invite-app__btn">Отправить</button>
            </div>
         </div>
      </div>
   )
}
export default Invite;