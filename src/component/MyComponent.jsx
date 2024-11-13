import React from 'react';
import { Helmet } from 'react-helmet';

function MyComponent() {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Tic-Tac-Toe" />
        <meta property="og:description" content="Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner." />
        <meta property="og:image" content="https://m.media-amazon.com/images/I/81-JkdF5yFL.jpg" />
        <meta property="og:url" content="https://tic-tac-toe-39ra.onrender.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://example.com/path-to-image.jpg" />
      </Helmet>
      <h1>Welcome to My Website</h1>
    </div>
  );
}

export default MyComponent;