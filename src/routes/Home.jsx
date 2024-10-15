// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
// import { useEffect } from "react";

export default function Home() {
  let cards = useSelector((store) => store.cardReducer.cards);

  // useEffect(() => {
  //   localStorage.setItem("cards");
  // }, [cards]);

  return (
    <div>
      <h2>Home</h2>
      <div>
        {cards.map((card, i) =>
          card.activate ? (
            <div key={i}>
              <h3>Activate Card</h3>
              <Link to={"/card/" + card.id} state={card}>
                <Card card={card} />
              </Link>
            </div>
          ) : (
            ""
          )
        )}
        <h3>Inactivate Cards</h3>
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

      <button>
        {cards.length < 4 ? (
          <Link to="/addCard">Add Card </Link>
        ) : (
          "Max 4 cards"
        )}
      </button>
    </div>
  );
}
