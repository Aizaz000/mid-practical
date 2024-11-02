import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <pre>© 2024 MovieMania. All rights reserved.</pre>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;