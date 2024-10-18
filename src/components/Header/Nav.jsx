import { Link } from "react-router-dom";
import style from "./Header.module.css";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <div className={style.icons}>
        <i className="fa-solid fa-house"></i>
        <Link to={"/"}>Home</Link>
      </div>
      <div className={style.icons}>
        <i className="fa-solid fa-credit-card"></i>
        <Link to={"/addCard"}>Add Card</Link>
      </div>
      <div className={style.icons}>
        <i className="fa-solid fa-screwdriver-wrench"></i>
        <Link to={"/setting"}>Setting</Link>
      </div>
    </nav>
  );
}
