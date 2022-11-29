import * as React from "react";
import { useState } from "react";
import iconSunRegularDark from "../../images/icon-sun-regular-dark.svg";
import iconMoonRegular from "../../images/icon-moon-regular.svg";

const IconTheme = () => {
  const themeType = localStorage.getItem("theme") || "dark";

  const [theme, setTheme] = useState(themeType);

  const toggleTheme = (themeType: string) => {
    localStorage.setItem("theme", themeType);
    setTheme(themeType);
    window.location.reload();
  };

  return (
    <>
      {theme === "dark" &&
        <button
          className="icon-theme-container"
          onClick={() => toggleTheme("light")}>
          <img className="icon-theme" src={iconSunRegularDark} />
        </button>}
      {theme === "light" &&
        <button
          className="icon-theme-container"
          onClick={() => toggleTheme("dark")}>
          <img className="icon-theme" src={iconMoonRegular} />
        </button>}
    </>
  )
}

export default IconTheme;