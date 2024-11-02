import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/favorites" style={styles.link}>Favorites</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '10px',
    textAlign: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
  },
};

export default Header;