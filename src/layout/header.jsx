import React from 'react';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">📚 Learning Resources</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link active" href="#">Resources</a></li>
            <li className="nav-item"><a className="nav-link active" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link active" href="#">Contact</a></li>
          </ul>

          <form className="d-flex ms-3" role="search" onSubmit={e => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by title"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
