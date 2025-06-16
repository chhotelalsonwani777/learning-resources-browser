function SortDropdown({ sort, setSort }) {
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div>
      <label className="fw-semibold mb-1">Sort By</label>
      <select className="form-select" value={sort} onChange={handleSortChange}>
        <option value="">Default</option>
        <option value="title">Title (A-Z)</option>
        <option value="duration">Duration (Shortest First)</option>
      </select>
    </div>
  );
}

export default SortDropdown;
