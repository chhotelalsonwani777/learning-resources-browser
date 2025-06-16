import { useEffect, useState } from 'react';
import Filters from './components/filters';
import SortDropdown from './components/shortdropdown';
import resourcesData from './data/resources';
import ResourceCard from './components/resourcecard';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './layout/header';

function App() {
  const [resources, setResources] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({ category: '', type: '' });
  const [sort, setSort] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setResources(resourcesData);
      setFiltered(resourcesData);
    }, 500);
  }, []);

  useEffect(() => {
    let result = [...resources];

    if (filters.category) {
      result = result.filter(item => item.category === filters.category);
    }
    if (filters.type) {
      result = result.filter(item => item.type === filters.type);
    }
    if (searchTerm.trim()) {
      result = result.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sort === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "duration") {
      result.sort((a, b) => a.duration - b.duration);
    }

    setFiltered(result);
  }, [filters, sort, resources, searchTerm]);

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="container py-4">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <Filters filters={filters} setFilters={setFilters} />
            <SortDropdown sort={sort} setSort={setSort} />
          </div>

          <div className="col-lg-9">
            <div className="row">
              {filtered.length > 0 ? (
                filtered.map(resource => (
                  <div className="col-md-6 col-lg-4 mb-4" key={resource.id}>
                    <ResourceCard
                      resource={resource}
                      resources={resources}
                      setResources={setResources}
                    />
                  </div>
                ))
              ) : (
                <p className="text-center">No resources found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
