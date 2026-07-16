import { useMemo, useState } from "react";

function Lesson16UseMemo() {
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
    console.log("Filtering products...");

    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lesson 16: useMemo</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lesson16UseMemo;