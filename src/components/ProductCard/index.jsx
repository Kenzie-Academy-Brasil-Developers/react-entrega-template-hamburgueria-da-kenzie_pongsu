import { StyledProductCard } from "./style";
import Button from "../Button";
import React from "react";

export default function ProductCard({
  handleClick,
  productId,
  productImg,
  productName,
  productCategory,
  productPrice,
}) {
  return (
    <StyledProductCard id={productId}>
      <div className="imgBox">
        <img src={productImg} alt={productName} />
      </div>
      <div className="cardInfos">
        <h3>{productName}</h3>
        <h6>{productCategory}</h6>
        <h4>R$ {productPrice.toFixed(2)}</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleClick(productId);
          }}
        >
          <Button className="btnGreen" innerText="Adicionar"></Button>
        </form>
      </div>
    </StyledProductCard>
  );
}
