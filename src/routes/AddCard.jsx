import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card/Card";

export default function AddCard() {
  const [newCard, setNewCard] = useState({});
  const [number, setNumber] = useState(0);
  const [holder, setHolder] = useState("");
  const [expire, setExpire] = useState("");
  const [CVV, setCVV] = useState(0);
  const [vendor, setVendor] = useState("");

  useEffect(() => {
    const inputCardData = () => {
      let inputCard = {
        // id: どうしよ。
        number: number,
        activate: false,
        holder: holder,
        expire: expire,
        CVV: CVV,
        vendor: vendor,
      };
      setNewCard(inputCard);
    };
    inputCardData();
  }, [number, holder, expire, CVV, vendor]);

  const navigate = useNavigate();
  const createCard = () => {
    // ReduxのState変更シンタックス
    alert("Card has created.");
    navigate("/");
  };

  return (
    <div>
      <h2>Add Card</h2>
      <Card card={newCard} />
      <br />
      <div>
        <div>
          <label htmlFor="number">Number: </label>
          <input
            type="number"
            id="number"
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
            <option value="Nordea">Nordea</option>
            <option value="SEB">SEB</option>
            <option value="SBAB">SBAB</option>
            <option value="Swedbank">Swedbank</option>
            <option value="ICA">ICA</option>
          </select>
        </div>
      </div>
      <br />
      <button
        onClick={() => {
          createCard();
        }}
      >
        Add new card
      </button>
    </div>
  );
}
