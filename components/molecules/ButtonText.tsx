import React, { FC } from 'react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

interface ButtonTextProps {
  onClick: () => void;
  text: string;
}

const ButtonText: FC<ButtonTextProps> = ({ onClick, text }) => {
  return (
    <Button onClick={onClick}>
      <Text>{text}</Text>
    </Button>
  );
};

export default ButtonText;