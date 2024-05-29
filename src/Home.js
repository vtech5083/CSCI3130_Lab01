import React from 'react';

function Home({ visits }) {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <p>Your Banner ID: B00921886</p>
      <p>Number of visits: {visits}</p>
    </div>
  );
}

export default Home;