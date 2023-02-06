import React from "react";
import { StyledCart } from "./style";
import CartProductCard from "../CartProductCard";
import CartTotal from "../CartTotal";

export default function Cart({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
}) {
  return (
    <StyledCart className="cartSection">
      <span className="cartHeader">Carrinho de compras</span>
      <ul id="productsListCart">
        {currentSale.length === 0 ? (
          <div className="empytCart">
            <h4>Sua sacola está vazia</h4>
            <h5>Adicione itens</h5>
          </div>
        ) : (
          <div className="cart">
            {currentSale.map((product) => (
              <CartProductCard
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                key={product.id}
                productId={product.id}
                productImg={product.img}
                productName={product.name}
                productCategory={product.category}
                productPrice={product.price}
              ></CartProductCard>
            ))}
            <CartTotal
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              setCurrentSale={setCurrentSale}
            ></CartTotal>
          </div>
        )}
      </ul>
    </StyledCart>
  );
}
