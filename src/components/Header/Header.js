import React, { useState } from "react";
import HeaderLogo from "../../images/header.svg";
import HeaderMenu from "../../images/header_menu.svg";
import UserImg from "../../images/header_user.png";
import UserMenu from "../../images/header_user_menu.png";
import "./Header.scss";

const Header = () => {
  const [lang, setLang] = useState("en");
  const [auth, setAuth] = useState(false);

  const langHandler = (value) => {
    setLang(value);
  };

  return (
    <header className="header">
      <img
        className={auth ? "header_logo_auth" : "header_logo"}
        src={HeaderLogo}
        alt="Header Logo"
      />
      {!auth ? (
        <>
          <span
            className={`lang_en ${lang === "en" ? "lang_en_active" : ""}`}
            onClick={() => langHandler("en")}
          >
            English
          </span>
          <span className="lang_divider"> | </span>
          <span
            className={`lang_bn ${lang === "bn" ? "lang_bn_active" : ""}`}
            onClick={() => langHandler("bn")}
          >
            Bangla
          </span>
        </>
      ) : (
        <>
          <button className="header_menu">
            <img src={HeaderMenu} alt="Menu" />
          </button>
          <img className="user_image" src={UserImg} alt="User" />
          <span className="username">Emily Blunt</span>
          <button className="user_menu">
            <img src={UserMenu} alt="User Menu" />
          </button>
        </>
      )}
    </header>
  );
};
export default Header;
