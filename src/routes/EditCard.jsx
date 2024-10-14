import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import { deleteCard } from "../redux/cardSlice";
import { useDispatch } from "react-redux";
import { editCard } from "../redux/cardSlice";

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
  const [activate, setActivate] = useState(location.state.activate);

  useEffect(() => {
    const updatedCard = {
      ...card,
      activate: activate,
    };
    console.log(updatedCard);
    setCard(updatedCard);
    dispatch(editCard(updatedCard));
  }, [activate]);

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

  return (
    <div>
      <h2>Edit Card</h2>
      <button
        onClick={() => {
          // Toggle
          setActivate(!activate);
        }}
      >
        {card.activate ? "Inactivate" : "Activate"}
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
      <Card card={card} />
      <div>
        <div>
          <label htmlFor="number">Number: </label>
          <input
            type="number"
            id="number"
            placeholder={card.number}
            onChange={(event) => {
              setNumber(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="holder">Holder: </label>
          <input
            type="text"
            id="holder"
            placeholder={holder}
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
            placeholder={expire}
            onChange={(event) => {
              setExpire(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="expire">CVV: </label>
          <input
            type="number"
            id="CVV"
            placeholder={CVV}
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
            placeholder={vendor}
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
      <Link to={"/"}>Back to home</Link>
    </div>
  );
}
