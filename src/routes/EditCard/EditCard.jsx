import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { deleteCard } from "../../redux/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { editCard } from "../../redux/cardSlice";
import style from "./EditCard.module.css";

export default function EditCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const [card, setCard] = useState(location.state);
  const [number, setNumber] = useState(location.state.number);
  const [holder, setHolder] = useState(location.state.holder);
  const [expire, setExpire] = useState(location.state.expire);
  const [CVV, setCVV] = useState(location.state.CVV);
  const [vendor, setVendor] = useState(location.state.vendor);
  const [activate] = useState(location.state.activate);

  let cards = useSelector((store) => store.cardReducer.cards);

  const toggleActivate = () => {
    // 他のActivateカードをinactivateに
    let currentActiveCard = cards.find((card) => {
      return card.activate && card.id !== location.state.id;
    });
    if (currentActiveCard) {
      let deactevateCard = { ...currentActiveCard, activate: false };
      dispatch(editCard(deactevateCard));
    }

    // 現在のカードをアクティベート
    const updatedCard = {
      ...card,
      activate: true,
    };
    dispatch(editCard(updatedCard));
    alert("This card is activated.");
    navigate("/");
  };

  const updateCard = () => {
    const updatedCard = {
      id: card.id,
      number: number,
      holder: holder,
      expire: expire,
      CVV: CVV,
      vendor: vendor,
      activate: activate,
    };
    setCard(updatedCard);
    dispatch(editCard(updatedCard));
  };

  // カードUIの同期
  useEffect(() => {
    setCard({
      number: number,
      activate: false,
      holder: holder,
      expire: expire,
      CVV: CVV,
      vendor: vendor,
    });
  }, [number, holder, expire, CVV, vendor]);

  return (
    <div>
      <h2>Edit Card</h2>
      <div className={style.editCard}>
        {card.activate ? (
          ""
        ) : (
          <button
            onClick={() => {
              toggleActivate();
            }}
          >
            Activate Card
            {/* {card.activate ? "Inactivate" : "Activate"} */}
          </button>
        )}

        <Card card={card} />

        {/* Render if card is activate */}
        {card.activate ? (
          <p>
            This Card is activated. Activate another card to edit this card.
          </p>
        ) : (
          <div>
            {/* Input Form */}
            <div>
              <div>
                <label htmlFor="number">Number: </label>
                <input
                  type="number"
                  id="number"
                  disabled={false}
                  onChange={(event) => {
                    if (event.target.value.length < 16) {
                      setNumber(event.target.value);
                    } else if (event.target.value.length >= 16) {
                      setNumber(event.target.value);
                      event.target.disabled = true;
                    }
                  }}
                />
              </div>
              <div>
                <label htmlFor="holder">Holder: </label>
                <input
                  type="text"
                  id="holder"
                  onChange={(event) => {
                    setHolder(event.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="expire">Expire Date: </label>
                <input
                  type="date"
                  id="expire"
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(event) => {
                    setExpire(event.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="expire">CVV: </label>
                <input
                  type="password"
                  id="CVV"
                  onChange={(event) => {
                    setCVV(event.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="vendor">Vendor</label>
                <select
                  name="vendor"
                  id="vendor"
                  onChange={(event) => {
                    setVendor(event.target.value);
                  }}
                >
                  <option value="">Choose Vendor</option>
                  <option value="Mastercard">Mastercard</option>
                  <option value="VISA">VISA</option>
                  <option value="AMEX">American Express</option>
                  <option value="JCB">JCB</option>
                </select>
              </div>
            </div>
            <button
              onClick={() => {
                updateCard();
                alert("Card is updated");
              }}
            >
              Edit Card
            </button>
            <button
              onClick={() => {
                dispatch(deleteCard(card));
                alert(`Card id:${card.id} has deleted`);
                navigate("/");
              }}
            >
              Delete Card
            </button>
          </div>
        )}

        <Link to={"/"}>Back to home</Link>
      </div>
    </div>
  );
}
