// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";

export default function Home() {
  let cards = useSelector((store) => store.cardReducer.cards);

  // useEffect(() => {
  //   console.log(cards);
  // }, [cards]);

  return (
    <div>
      <h2>Home</h2>
      <div>
        {cards.map((card, i) => (
          <Link to={"/card/" + card.id} key={i} state={card}>
            <Card card={card} />
          </Link>
        ))}
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
