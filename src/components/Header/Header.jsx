import style from "../Header/Header.module.css";
import Nav from "./Nav";
import { useSelector } from "react-redux";

export default function Header() {
  let colorTheme = useSelector((store) => store.themeReducer.theme);
  let headerColor = style[colorTheme];

  return (
    <header className={headerColor}>
      <p>Header</p>
      <Nav></Nav>
    </header>
  );
}
