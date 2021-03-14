import React, { useState, useEffect } from 'react'

const Toggle = ({ id }) => {
    
  const [ open, setOpen ] = useState(false)
  
  // monitor the state of the toggle
  // add/remove click event handler to the document
  useEffect(() => {
    const clickHandler = ({ target }) => {
      const container = document.getElementById(`container-${id}`);
      if (container.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("click", clickHandler);

    // these functions clean up the event listeners
    return () => document.removeEventListener("click", clickHandler);
  });

  // same but for keypresses
  // if the esc key is pressed close the toggles
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setOpen(false);
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });
  
  // assumes that show and active are classes for css
  return (
    <div id={id}>
      <button 
        aria-expanded={open === true ? "true" : "false"}
        className={open === true ? "active" : ""}
        onClick={ () => setOpen(!open) }>
        Toggle
      </button>
      <ul className={open ? "show" : ""}>
        <li>
          <a href="/some-link">Some Link</a>
        </li>
  
      </ul>
    </div>
  )
}

export default Toggle