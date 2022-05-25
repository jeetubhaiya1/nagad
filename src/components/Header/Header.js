import React, { useState } from "react";
import HeaderLogo from "../../images/header.svg";
import HeaderMenu from "../../images/header_menu.svg";
import UserImg from "../../images/header_user.png";
import UserMenu from "../../images/header_user_menu.png";
import "./Header.scss";
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import DashSidebar from '../DashSidebar/DashSidebar';

const Header = () => {
  const [lang, setLang] = useState("en");
  const [toggleSider, setToggleSider] = useState(false);
  const [auth, setAuth] = useState(false);

  const langHandler = (value) => {
    setLang(value);
  };
  
  return (
    <header className="header-wrapper">
      <div className="header-left">
        <div>
          <img
            className={auth ? "header_logo_auth" : "header_logo"}
            src={HeaderLogo}
            alt="Header Logo"
          />
        </div>
        <div className="header-toggle-button">
          <ToggleButton value="justify" key="justify" onClick={()=> setToggleSider(true) }>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </div>
      </div>

      <DashSidebar toggleSider={toggleSider} setToggleSider={setToggleSider} />

      <div className="header-side-menu">
        {!auth ? (
          <>
            <span
              className={`lang_en ${lang === "en" ? "lang_en_active": ""}`}
              onClick={() => langHandler("en")}
            >
              English
            </span>
            <span className="lang_divider"> | </span>
            <span
              className={`lang_bn ${lang === "bn" ? "lang_bn_active": ""}`}
              onClick={() => langHandler("bn")}
            >
              Bangla
            </span>
          </>
        ) : (
          <>
            <img className="header_menu" src={HeaderMenu} alt="Menu" />
            <img className="user_image" src={UserImg} alt="User" />
            <span className="username">Emily Blunt</span>
            <button className="user_menu">
              <img src={UserMenu} alt="User Menu" />
            </button>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
