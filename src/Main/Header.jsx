
function Header() {
   return(
      <section className="header">
         <nav className=" header__nav container">
            <ul className="header__list">
               <li className="header__item"><a href="/">Home</a></li>
               <li className="header__item"><a href="/Test">Quiz app</a></li>
               <li className="header__item"><a href="/Invite">Invite app</a></li>
            </ul>
         </nav>
      </section>
   )
}
export default Header;

/*<BrowserRouter>
               <Routes>
                  <Route path='/' element=''/>
                  <Route path='/Quiz' element={<Quiz />}/>
                  <Route path='/Invite' element={<Invite />}/>
               </Routes>
               </BrowserRouter> */