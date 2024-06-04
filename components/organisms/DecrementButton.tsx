"use client";

import React, { FC } from 'react';
import { useCounter } from './CounterContext';
import ButtonText from '../molecules/ButtonText';

const DecrementButton: FC = () => {
  const { decrement } = useCounter();
  return <ButtonText onClick={decrement} text="decrement" />;
};

export default DecrementButton;