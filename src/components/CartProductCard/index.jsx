import { StyledCartProductCard } from "./style";
import { toast } from "react-hot-toast";
import React from "react";

export default function CartProductCard({
  currentSale,
  setCurrentSale,
  productId,
  productImg,
  productName,
  productCategory,
}) {
  return (
    <StyledCartProductCard>
      <div className="firstPartCartCard">
        <span className="cartImgBox">
          <img className="cartImg" src={productImg} alt={productName} />
        </span>
        <div className="middlePartCartCard">
          <h3>{productName}</h3>
          <h6>{productCategory}</h6>
        </div>
      </div>
      <div className="removeCartCard">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCurrentSale(
              currentSale.filter((product) => productId !== product.id)
            );
            toast.success("Produto removido com sucesso");
          }}
        >
          <button>Remover</button>
        </form>
      </div>
    </StyledCartProductCard>
  );
}
