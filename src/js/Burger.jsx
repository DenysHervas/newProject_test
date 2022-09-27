import { useState } from "react";

function Burger(){
  const[btnState, seBtnState]=useState(false);
  function handleClick(){
      seBtnState(btnState=>!btnState);
  }
  
  let toggleClassCheck = btnState ? 'burger_active' : '';

  return(
    <section className="ready__block__wrapper__burger">
        <div className={`burger button-burger ${toggleClassCheck}`} onClick={handleClick}>
                <div className="burger__line burger__line_first"></div>
                <div className="burger__line burger__line_second"></div>
                <div className="burger__line burger__line_third"></div>
                <div className="burger__line burger__line_fourth"></div>
              </div>
              <div className= {`header__nav_burger ${toggleClassCheck}`}>
                <div className="header__nav-link header__nav-link_focus">
                  <a href="#">Home</a>
                </div>
                <div className="header__nav-link">
                  <a href="#">Our mission</a>
                </div>
                <div className="header__nav-link">
                  <a href="#">Places</a>
                </div>
                <div className="header__nav-link">
                  <a href="#">Team</a>
                </div>
        </div>
    </section>
  )

}

export default Burger;