import React from 'react';
import { CounterProvider } from '../components/organisms/CounterContext';
import CounterView from '../components/views/CounterView';

const Home: React.FC = () => {
  return (
    <CounterProvider>
      <CounterView />
    </CounterProvider>
  );
};

export default Home;