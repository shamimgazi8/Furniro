// InteriorPage.js

import React from 'react';

const InteriorPage = () => {
  return (
    <div className="interior-page">
      <header>
        <h1>Welcome to Interior Solution</h1>
      </header>
      <main>
        <section className="section">
          <h2>Living Room</h2>
          <p>Explore the latest trends in living room design.</p>
        </section>
        <section className="section">
          <h2>Bedroom</h2>
          <p>Discover cozy bedroom decor ideas.</p>
        </section>
        <section className="section">
          <h2>Kitchen</h2>
          <p>Find inspiration for modern kitchen layouts.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Interior Design Co. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default InteriorPage;
