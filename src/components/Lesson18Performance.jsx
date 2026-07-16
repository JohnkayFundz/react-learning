import { useCallback, useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

function Lesson18Performance() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Keyboard", price: 80 },
    { id: 3, name: "Mouse", price: 40 },
    { id: 4, name: "Headphones", price: 150 },
    { id: 5, name: "Phone", price: 900 },
  ];

  const filteredProducts = useMemo(() => {
    console.log("Filtering Products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lesson 18: Performance Optimization</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <br />
      <br />

      <SearchBar
        search={search}
        setSearch={handleSearch}
      />

      <h3>
        Products Found: {filteredProducts.length}
      </h3>

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Lesson18Performance;