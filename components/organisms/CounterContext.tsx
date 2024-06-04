"use client";

import React, { createContext, useState, FC, ReactNode, useContext } from 'react';

interface CounterContextType {
  index: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [index, setIndex] = useState(0);
  const increment = () => setIndex(prevIndex => prevIndex + 1);
  const decrement = () => setIndex(prevIndex => prevIndex - 1);

  return (
    <CounterContext.Provider value={{ index, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};