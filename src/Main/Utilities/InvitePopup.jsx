import check from '../icons/check.svg';
import React from 'react';
function InvitePopup({usersNum, modalActive, openPopup}) {
   return(
      <div className={`invite__popup ${modalActive ? 'active' : ''}`}>
         <div className="invite__popup-body">
            <img src={check} alt="done" className="invite__popup-icon" />
            <h2 className="invite__popup-title">Вы отправили приглашение <span>{usersNum}</span> пользователям</h2>
            <button onClick={openPopup} className="invite__popup-btn">Вернуться назад</button>
         </div>
      </div>
   )
}
export default InvitePopup;