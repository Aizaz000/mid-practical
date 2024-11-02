import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MovieList from './Components/Movielist';
import SearchBar from './Components/Searchbar';

function App() {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} />
                <MovieList />
                <MovieList />
                <MovieList />
                <MovieList />
                <MovieList />
              </>
            }
          />
          <Route path="/favorites" element={<h2>Favorite Movies</h2>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;