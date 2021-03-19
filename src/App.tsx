import React, { FC } from 'react';
const apiKey = process.env.REACT_APP_API_KEY;

const App: FC = () => {
  return (
    <div className="App">
      <h5>{apiKey}</h5>
    </div>
  );
};

export default App;
