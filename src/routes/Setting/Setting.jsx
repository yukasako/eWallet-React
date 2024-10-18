import style from "./Setting.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/themeSlice";
import { deleteCard } from "../../redux/cardSlice";

export default function Setting() {
  const dispatch = useDispatch();

  let cards = useSelector((store) => store.cardReducer.cards);
  console.log(cards);

  const deleteInactivates = () => {
    let inactivates = cards.filter((card) => {
      return card.activate === false;
    });
    inactivates.forEach((card) => {
      dispatch(deleteCard(card));
    });
    alert("All inactivate cards has been deleted.");
  };

  return (
    <div>
      <h2>Setting</h2>
      <div className={style.setting}>
        <label htmlFor="theme">Choose Color Theme</label>
        <select
          name="theme"
          id="theme"
          onChange={(e) => {
            dispatch(changeTheme(e.target.value));
            document.body.className = e.target.value;
          }}
        >
          <option value="light">Light mode</option>
          <option value="dark">Dark mode</option>
          <option value="green">Green</option>
        </select>
        <button
          onClick={() => {
            deleteInactivates();
          }}
        >
          Delete all inactivate cards
        </button>
      </div>
    </div>
  );
}
