import * as React from "react";
import { useState } from "react";
import iconSunRegularDark from "../../images/icon-sun-regular-dark.svg";
import iconMoonRegular from "../../images/icon-moon-regular.svg";

const IconTheme = () => {
  if (typeof window === "undefined") return null;

  let themeType;

  if (localStorage.getItem("theme")) {
    themeType = localStorage.getItem("theme");
  } else {
    themeType = "light";
    localStorage.setItem("theme", "light");
  }

  const [theme, setTheme] = useState(themeType);

  const toggleTheme = (themeType: string) => {
    setTheme(themeType);
    localStorage.setItem("theme", themeType);
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