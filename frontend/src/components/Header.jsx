import React from "react";

import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.Header}>
      <nav className={style.nav}>
        <ul>
          <li>Analytics</li>
          <li>status</li>
          <li>others</li>
          <li>people</li>
        </ul>
      </nav>
      <div className={style.profile}>profile pic</div>
    </div>
  );
};
