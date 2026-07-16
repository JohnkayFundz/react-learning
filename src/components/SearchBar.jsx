import { memo } from "react";

const SearchBar = memo(({ search, setSearch }) => {
  console.log("SearchBar Rendered");

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
});

export default SearchBar;