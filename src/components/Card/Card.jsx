/* eslint-disable react/prop-types */
import style from "./Card.module.css";

import logoVisa from "../../assets/vendor/VISA.png";
import logoMastercard from "../../assets/vendor/Mastercard.png";
import logoAMEX from "../../assets/vendor/AMEX.png";
import logoJCB from "../../assets/vendor/JCB.png";

export default function Card({ card }) {
  let cardVendor;
  let logo;
  switch (card.vendor) {
    case "VISA":
      cardVendor = style.VISA;
      logo = logoVisa;
      break;
    case "Mastercard":
      cardVendor = style.Mastercard;
      logo = logoMastercard;
      break;
    case "AMEX":
      cardVendor = style.AMEX;
      logo = logoAMEX;
      break;
    case "JCB":
      cardVendor = style.JCB;
      logo = logoJCB;
      break;
  }

  // 桁表示
  let formatNumber;
  if (card.number) {
    let cardNumber = card.number.toString().split("");
    formatNumber = cardNumber
      .map((number, index) => {
        return (
          (index % 4 === 0 && index !== 0
            ? `${"\u00A0"}${"\u00A0"}${"\u00A0"}${"\u00A0"}`
            : "") + number
        );
      })
      .join("");
  }

  return (
    <div className={`${cardVendor} ${style.defaultCard}`}>
      <div className={style.space}></div>
      <div>
        <p className={style.number}>{formatNumber}</p>
        <div className={style.logoAndCardInfo}>
          <div className={style.cardInfo}>
            <p className={style.name}>{card.holder}</p>
            <p>{card.expire}</p>
          </div>
          <img className={style.logo} src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
