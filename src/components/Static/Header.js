import style from "./Header.module.css";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location);
  let heading = <h2>Popular Titles</h2>;

  if (location.pathname === "/series") {
    heading = <h2>Popular Series</h2>;
  } else if (location.pathname === "/movies") {
    heading = <h2>Popular Movies</h2>;
  }

  return (
    <header>
      <div className={style.main_header}>
        <div className={style.header_left}>
          <h1>DEMo Streaming</h1>
        </div>
        <div className={style.header_right}>
          <a href="#LogIn">Log in</a>
          <button>Start your free trial</button>
        </div>
      </div>
      <div className={style.sub_header}>
        {heading}
      </div>
    </header>
  );
}

export default Header;
