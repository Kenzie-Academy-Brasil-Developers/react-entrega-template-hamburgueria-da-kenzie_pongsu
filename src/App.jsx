import GlobalStyle from "./styles/global";
import { api } from "./services/api";
import Cart from "./components/Cart";
import SearchInfo from "./components/SearchInfos";
import ProductsList from "./components/ProductsList";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { toast, Toaster } from "react-hot-toast";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products");

        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, []);

  function handleClick(id) {
    if (!currentSale.includes(products.find((product) => product.id === id))) {
      setCurrentSale([
        ...currentSale,
        products.find((product) => product.id === id),
      ]);
      toast.success("Item adicionado com sucesso");
    } else {
      toast.error("Este item já se encontra no carrinho");
    }
  }

  useEffect(() => {
    setCartTotal(
      currentSale.reduce((sum, product) => sum + product.price, 0).toFixed(2)
    );
  }, [currentSale]);

  return (
    <div className="App">
      <GlobalStyle />
      <Toaster position="bottom-right" />
      <Header
        setSearchText={setSearchText}
        searchText={searchText}
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <main className="container">
        <div className="productsSection">
          <SearchInfo
            setFilteredProducts={setFilteredProducts}
            products={products}
            setSearchText={setSearchText}
            searchText={searchText}
          />
          <ProductsList
            setCartTotal={setCartTotal}
            handleClick={handleClick}
            products={products}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            searchText={searchText}
          />
        </div>
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </main>
    </div>
  );
}

export default App;
