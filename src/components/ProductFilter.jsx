function ProductFilter({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Laptop">Laptop</option>
        <option value="Phone">Phone</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>
  );
}

export default ProductFilter;