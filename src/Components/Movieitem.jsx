import React from 'react';

const MovieItem = ({ title, genre, date, rating, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>Genre: {genre}</p>
      <p>Release Date: {date}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    margin: '10px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default MovieItem;