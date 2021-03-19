import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './store';
import Search from './components/Search';
import Alert from './components/Alert';
import Weather from './components/Weather';

const App: FC = () => {
  const onClose = () => {};
  return (
    <div className="App">
      <Search title="something" />
      <Alert message="thing" onClose={onClose} />
      <Weather />
    </div>
  );
};

export default App;
