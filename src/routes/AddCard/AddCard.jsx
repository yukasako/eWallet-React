import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../../redux/cardSlice";
import Card from "../../components/Card/Card";
import style from "./AddCard.module.css";

export default function AddCard() {
  const [newCard, setNewCard] = useState({});
  const [number, setNumber] = useState(0);
  const [holder, setHolder] = useState("");
  const [expire, setExpire] = useState("");
  const [CVV, setCVV] = useState(0);
  const [vendor, setVendor] = useState("");
  const dispatch = useDispatch();

  let cards = useSelector((store) => store.cardReducer.cards);
  console.log(cards);

  // ID作成
  let maxId = 0;
  cards.forEach((card) => {
    if (card.id > maxId) {
      maxId = card.id;
    }
  });
  maxId += 1;

  // カードUIの同期
  useEffect(() => {
    setNewCard({
      id: maxId,
      number: number,
      activate: false,
      holder: holder,
      expire: expire,
      CVV: CVV,
      vendor: vendor,
    });
  }, [number, holder, expire, CVV, vendor]);

  const navigate = useNavigate();
  const createCard = () => {
    // ReduxのState変更シンタックス
    dispatch(addCard(newCard));
    navigate("/");
  };
  return (
    <div>
      <h2>Add Card</h2>
      <div className={style.addCard}>
        <Card card={newCard} />
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
            if (
              number.length === 16 &&
              holder.length !== 0 &&
              expire.length !== 0 &&
              vendor.length !== 0
            ) {
              createCard();
            } else {
              alert(`Information missing. Card number should be 16 digis.`);
            }
          }}
        >
          Add new card
        </button>
        <Link to={"/"}>Back to home</Link>
      </div>
    </div>
  );
}
