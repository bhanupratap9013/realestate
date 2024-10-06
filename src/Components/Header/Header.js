import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

function Header(props) {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/" className="nohover">
           <img src="logo.jpg" alt="logo" width={100} style={{marginLeft: "100px"}}/>
        </Link>
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
        
          <div className=" flexCenter h-menu" style={getMenuStyles(menuOpened)}>
           {
              props.showHome ? 
                <Link to="/">Home</Link>
              :
              
            <>
              <a href="#redidencies">Recidencies</a>
              <a href="#value">Our Value</a>
              <a href="#contact">Contact Us</a>
              <a href="#getstarted">Get Started</a>
            </>
           }
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;