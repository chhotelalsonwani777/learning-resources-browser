function Filters({ filters, setFilters }) {
  const categories = ["Language", "Math", "Science"];
  const types = ["Video", "Article"];

  const handleCategoryChange = (e) => {
    setFilters(prev => ({ ...prev, category: e.target.value }));
  };

  const handleTypeChange = (e) => {
    setFilters(prev => ({ ...prev, type: e.target.value }));
  };

  return (
    <div className="filters-card sticky-top  bg-white rounded  mt-4">
      <h5 className="mb-3">Filter Resources</h5>

      <label className="fw-semibold mb-1">Category</label>
      <select className="form-select mb-3" value={filters.category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>

      <label className="fw-semibold mb-1">Filter by Type</label>

      <select className="form-select mb-3" value={filters.type} onChange={handleTypeChange}>
        <option value="">All Types</option>
        {types.map((type, idx) => (
          <option key={idx} value={type}>{type}</option>
        ))}
      </select>


    </div>
  );
}

export default Filters;
