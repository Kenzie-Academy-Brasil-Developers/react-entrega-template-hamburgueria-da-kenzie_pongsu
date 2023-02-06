import { StyledHeader } from "./style";
import Logo from "../Logo";
import InputSearch from "../InputSearch";
import React from "react";

export default function Header({
  setFilteredProducts,
  filteredProducts,
  products,
  setSearchText,
  searchText,
}) {
  return (
    <StyledHeader className="container">
      <Logo />
      <div className="searchContainer">
        <InputSearch
          setSearchText={setSearchText}
          searchText={searchText}
          products={products}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
    </StyledHeader>
  );
}