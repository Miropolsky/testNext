"use client";

import React, { FC } from 'react';
import { useCounter } from '../organisms/CounterContext';
import IncrementButton from '../organisms/IncrementButton';
import DecrementButton from '../organisms/DecrementButton';
import Text from '../atoms/Text';

const CounterView: FC = () => {
  const { index } = useCounter();
  return (
    <>
      <Text>{index}</Text>
      <IncrementButton />
      <DecrementButton />
    </>
  );
};

export default CounterView;