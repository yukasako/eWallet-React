// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import style from "../components/Card/Card.module.css";
// import { useEffect } from "react";

export default function Home() {
  let cards = useSelector((store) => store.cardReducer.cards);

  // useEffect(() => {
  //   localStorage.setItem("cards");
  // }, [cards]);

  return (
    <div className={style.renderField}>
      <div className={style.renderCard}>
        {cards.map((card, i) =>
          card.activate ? (
            <div key={i}>
              <h2>Activate Card</h2>
              <Link to={"/card/" + card.id} state={card}>
                <Card card={card} />
              </Link>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <h2>Inactivate Cards</h2>
      <div className={style.renderCard}>
        {cards.map((card, i) =>
          card.activate ? (
            ""
          ) : (
            <Link to={"/card/" + card.id} key={i} state={card}>
              <Card card={card} />
            </Link>
          )
        )}
      </div>

      {cards.length < 4 ? (
        <button>
          <Link to="/addCard">Add Card </Link>{" "}
        </button>
      ) : (
        <p>Max 4 cards</p>
      )}
    </div>
  );
}
