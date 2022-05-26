import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks.ts";
import { logout } from "../../redux/reducers/authReducer.ts";
import HeaderLogo from "../../images/header.svg";
import HeaderMenu from "../../images/header_menu.svg";
import UserImg from "../../images/header_user.png";
import UserMenu from "../../images/header_user_menu.png";
import "./Header.scss";

const Header = () => {
  const [lang, setLang] = useState("en");
  const auth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const langHandler = (value) => {
    setLang(value);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
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
          <button className="user_menu" onClick={logoutHandler}>
            <img src={UserMenu} alt="User Menu" />
          </button>
        </>
      )}
    </header>
  );
};
export default Header;
