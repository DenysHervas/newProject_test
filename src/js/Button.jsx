import { useState } from "react";

function Button(){
  const[btnState, seBtnState]=useState(false);
  function handleClick(){
      seBtnState(btnState=>!btnState);
  }
  
  let toggleClassCheck = btnState ? 'active' : '';

  return(
    <section className="ready__block__wrapper">
        <div className="ready__block__container">
            <a className="ready__block__title">What can I do to protect our planet?</a>
            <button className={`btn ${toggleClassCheck}`}
            onClick={handleClick}>
            </button>
        </div>
        <p className={`ready__hidden-text ${toggleClassCheck}`}>
              Not to make an open fire in nature and to clean up litter; not to pollute open water
              bodies; to switch to alternative energy sources; to reduce the use of non-renewable
              resources
        </p>
    </section>
  )

}

export default Button;