import { StyledSearchInfo } from "./style";
import Button from "../Button";
import React from "react";
import { toast } from "react-hot-toast";

export default function SearchInfo({
  searchText,
  setSearchText,
  setFilteredProducts,
  products,
}) {
  return (
    searchText !== "" && (
      <StyledSearchInfo>
        <div>
          <h3>Resultados para:</h3>
          <p className="searchText">{searchText}</p>
        </div>
        <Button
          innerText="Limpar busca"
          className="btnGreen"
          onClick={() => {
            setSearchText("");
            setFilteredProducts(products);
            toast("Exibindo todos produtos");
          }}
        />
      </StyledSearchInfo>
    )
  );
}
