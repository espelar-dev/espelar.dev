import * as React from "react";
import { useState } from "react";
import iconSunRegularDark from "../../images/icon-sun-regular-dark.svg";
import iconMoonRegular from "../../images/icon-moon-regular.svg";

const IconTheme = () => {
  const themeType = typeof window === "undefined" ? "light" : (localStorage.getItem("theme") || "light");

  const [theme, setTheme] = useState(themeType);

  const toggleTheme = (themeType: string) => {
    window.location.reload();
    setTheme(themeType);
    localStorage.setItem("theme", themeType);
  };

  return (
    <>
      {theme === "dark" &&
        <button
          className="icon-theme-container"
          onClick={() => toggleTheme("light")}>
          <img className="icon-theme" src={iconSunRegularDark} />
        </button>}
      {(theme === "light" || !theme) &&
        <button
          className="icon-theme-container"
          onClick={() => toggleTheme("dark")}>
          <img className="icon-theme" src={iconMoonRegular} />
        </button>}
    </>
  )
}

export default IconTheme;