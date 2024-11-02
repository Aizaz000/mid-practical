import React from 'react';
import MovieItem from './Movieitem';

const MovieList = () => {
  const movies = [
    { title: 'Transformers', genre: 'Action', date: '01-01-2000', rating: '4.5/5', image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justgeek.com%2Fblogs%2Fnews%2F3-inspirational-lessons-to-learn-from-optimus-prime&psig=AOvVaw3_3xpsqon92e7ppIOmrK-N&ust=1729832005438000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIC3-sWcpokDFQAAAAAdAAAAABAE"},
    { title: 'Transformers', genre: 'Action', date: '01-01-2000', rating: '4.5/5', image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justgeek.com%2Fblogs%2Fnews%2F3-inspirational-lessons-to-learn-from-optimus-prime&psig=AOvVaw3_3xpsqon92e7ppIOmrK-N&ust=1729832005438000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIC3-sWcpokDFQAAAAAdAAAAABAE"},
    { title: 'Transformers', genre: 'Action', date: '01-01-2000', rating: '4.5/5', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justgeek.com%2Fblogs%2Fnews%2F3-inspirational-lessons-to-learn-from-optimus-prime&psig=AOvVaw3_3xpsqon92e7ppIOmrK-N&ust=1729832005438000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIC3-sWcpokDFQAAAAAdAAAAABAE' }
  ];

  return (
    <div style={styles.grid}>
      {movies.map((movie, index) => (
        <MovieItem key={index} {...movie} />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
  },
};

export default MovieList;