import { NavLink } from "react-router-dom";

function Header() {
   return(
      <section className="header">
         <nav className=" header__nav container">
            <ul className="header__list">
               <li className="header__item"><NavLink to="/React-way">Quiz app</NavLink></li>
               <li className="header__item"><NavLink to="/Invite">Invite app</NavLink></li>
               <li className="header__item"><NavLink to="/Currency">Converter</NavLink></li>
            </ul>
         </nav>
      </section>
   )
}
export default Header;
