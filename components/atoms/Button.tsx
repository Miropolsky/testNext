import React, { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;