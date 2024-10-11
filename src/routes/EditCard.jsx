import { useLocation } from "react-router-dom";
import Card from "../components/Card/Card";

export default function EditCard() {
  let location = useLocation();
  console.log(location.state);
  return (
    <div>
      <h2>Edit Card</h2>
      <Card card={location.state} />
    </div>
  );
}
