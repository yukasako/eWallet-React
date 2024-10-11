/* eslint-disable react/prop-types */
import style from "../Card/Card.module.css";

export default function Card({ card }) {
  return (
    <div className={style.card}>
      <p>Number: {card.number}</p>
      <p>Holder: {card.holder}</p>
      <p>Expire: {card.expire}</p>
      <p>Vendor: {card.vendor}</p>
    </div>
  );
}
