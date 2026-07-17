import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import { products } from "../data/products";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const totalValue = filteredProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  const handleReset = () => {
    setSearch("");
    setCategory("");
  };

  return (
    <div className="container">
      <h1>🛍️ Product Search Dashboard</h1>

      <ProductFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        onReset={handleReset}
      />

      <div className="stats">
        <div className="stat-card">
          <h2>{filteredProducts.length}</h2>
          <p>Products Found</p>
        </div>

        <div className="stat-card">
          <h2>${totalValue.toLocaleString()}</h2>
          <p>Total Value</p>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <h2>No products found</h2>
          <p>Try changing your search or category filter.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;