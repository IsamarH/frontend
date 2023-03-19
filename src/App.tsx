import { useEffect, useState } from "react";
import { Categories } from "./components/Categories";
import { Countries } from "./components/Countries";
import { Genders } from "./components/Genders";
import { Nav } from "./components/nav/Nav";

function App() {
  const [products, setProducts] = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Countries/>
      <Categories/>
      <Genders/>
      <h1>Hola mundo react</h1>
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default App;
