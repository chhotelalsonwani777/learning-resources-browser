import { useEffect, useRef, useState } from "react";

function Filters({ filters, setFilters }) {
  const [isSticky, setIsSticky] = useState(false);
  const [stickyWidth, setStickyWidth] = useState(null);

  const ref = useRef(null);

  const categories = ["Language", "Math", "Science"];
  const types = ["Video", "Article"];



  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
      if (ref.current) {
        setStickyWidth(ref.current.offsetWidth);
      }
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleCategoryChange = (e) => {
    setFilters(prev => ({ ...prev, category: e.target.value }));
  };

  const handleTypeChange = (e) => {
    setFilters(prev => ({ ...prev, type: e.target.value }));
  };

  return (


    <div ref={ref} className={`filters-card bg-white rounded  ${isSticky ? "custom-sticky" : ""}`} style={isSticky ? { width: stickyWidth } : {}} >
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
