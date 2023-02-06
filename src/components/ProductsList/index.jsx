import { StyledProductsList } from "./style";
import ProductCard from "../ProductCard";

export default function ProductsList({
  setCartTotal,
  handleClick,
  products,
  currentSale,
  setCurrentSale,
  filteredProducts,
}) {
  return (
    <StyledProductsList>
      {filteredProducts.length >0?
      filteredProducts.map((product) => (
        <ProductCard
          setCartTotal={setCartTotal}
          handleClick={handleClick}
          products={products}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          key={product.id}
          productId={product.id}
          productImg={product.img}
          productName={product.name}
          productCategory={product.category}
          productPrice={product.price}
        ></ProductCard>
      )):
        <h4 className="searchFail">Infelizmente não encontramos nenhum produto, digite novamente o nome do produto ou sua categoria</h4>
      }
    </StyledProductsList>
  );
}
