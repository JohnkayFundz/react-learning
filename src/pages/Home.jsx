import { useState, useMemo, useCallback } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Memoized filtering
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  // Memoized total value
  const totalValue = useMemo(() => {
    return filteredProducts.reduce((sum, product) => sum + product.price, 0);
  }, [filteredProducts]);

  // Memoized reset button
  const resetFilters = useCallback(() => {
    setSearch("");
    setCategory("All");
  }, []);

  return (
    <div className="container">
      <h1>🛍️ Product Search Dashboard</h1>

      <ProductFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <button className="reset-btn" onClick={resetFilters}>
        Reset Filters
      </button>

      <div className="stats">
        <div className="stat-card">
          <h2>{filteredProducts.length}</h2>
          <p>Products Found</p>
        </div>

        <div className="stat-card">
          <h2>${totalValue}</h2>
          <p>Total Value</p>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        )}
      </div>
    </div>
  );
}