import React from "react";

import { useFilterContext } from "../../context/filtroCtx";

const SearchInput = () => {
  const { filters, setFilters } = useFilterContext();
  return (
    <input
      className="input"
      onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      type="text"
      placeholder="Buscar plato"
      value={filters.search}
    />
  );
};

export default SearchInput;
