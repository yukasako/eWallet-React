import { Link } from "react-router-dom";
import style from "./Header.module.css";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <Link to={"/"}>Home</Link>
      <Link to={"/addCard"}>Add Card</Link>
      <Link to={"/setting"}>Setting</Link>
    </nav>
  );
}
