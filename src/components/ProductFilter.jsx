function ProductFilter({
  search,
  setSearch,
  category,
  setCategory,
  onReset,
}) {
  return (
    <div className="filters">
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
        <option value="">All Categories</option>
        <option value="Laptop">Laptop</option>
        <option value="Phone">Phone</option>
        <option value="Accessories">Accessories</option>
      </select>

      <button onClick={onReset}>
        Reset Filters
      </button>
    </div>
  );
}

export default ProductFilter;