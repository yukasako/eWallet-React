import style from "../Header/Header.module.css";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.svg";

export default function Header() {
  let colorTheme = useSelector((store) => store.themeReducer.theme);
  let headerColor = style[colorTheme];

  return (
    <header className={headerColor}>
      <img src={logo} alt="logo" />
      <Nav></Nav>
    </header>
  );
}
