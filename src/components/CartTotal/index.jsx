import { StyledCartTotal } from "./style";
import Button from "../Button";
import { toast } from "react-hot-toast";
import React from "react";

export default function CartTotal({ cartTotal, setCurrentSale }) {
  return (
    <StyledCartTotal>
      <span className="cartPriceResum">
        <h4>Total</h4>
        <p>R$ {cartTotal}</p>
      </span>
      <form
        className="cleanCart"
        onSubmit={(e) => {
          e.preventDefault();
          setCurrentSale([]);
          toast.success("Todos produtos foram removidos");
        }}
      >
        <Button className="btnGrey" innerText="Remover todos"></Button>
      </form>
    </StyledCartTotal>
  );
}
