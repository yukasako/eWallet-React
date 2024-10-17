/* eslint-disable react/prop-types */
import style from "./Card.module.css";

export default function Card({ card }) {
  let cardVendor = style.noVendor;
  switch (card.vendor) {
    case "VISA":
      cardVendor = style.VISA;
      break;
    case "Mastercard":
      cardVendor = style.Mastercard;
      break;
    case "AMEX":
      cardVendor = style.AMEX;
      break;
    case "JCB":
      cardVendor = style.JCB;
      break;
  }
  return (
    <div className={cardVendor}>
      <p>Number: {card.number}</p>
      <p>Holder: {card.holder}</p>
      <p>Expire: {card.expire}</p>
      <p>Vendor: {card.vendor}</p>
    </div>
  );
}
