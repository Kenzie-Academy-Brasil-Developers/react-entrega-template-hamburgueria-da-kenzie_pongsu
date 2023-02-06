import { StyledForm } from "./style";
import Button from "../Button";

export default function InputSearch({
  setFilteredProducts,
  products,
  searchText,
  setSearchText,
}) {    
  function showProducts() {
    const filter = products.filter((element) => {
      return (
        element.name.toLowerCase().includes(searchText.toLowerCase()) ||
        element.category.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredProducts(filter);
  }

  function attSearch(searchValue) {
    setSearchText(searchValue)
    showProducts() 
  }

  return (
    <StyledForm
      className="searchBar"
      onSubmit={(event) => showProducts(event.preventDefault())}
    >
      <input
        value={searchText}
        onKeyUp={(e) => attSearch(e.target.value)}
        onChange={(e) => attSearch(e.target.value)}
        id="searchInput"
        type="text"
        placeholder="Digite para pesquisar"
      />
      <Button className="btnGreen" innerText="Pesquisar" />
    </StyledForm>
  );
}
