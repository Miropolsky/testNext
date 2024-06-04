"use client";

import React, { FC } from 'react';
import { useCounter } from './CounterContext';
import ButtonText from '../molecules/ButtonText';

const IncrementButton: FC = () => {
  const { increment } = useCounter();
  return <ButtonText onClick={increment} text="increment" />;
};

export default IncrementButton;