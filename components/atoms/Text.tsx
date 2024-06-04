import React, { FC } from 'react';

interface TextProps {
  children: React.ReactNode;
}

const Text: FC<TextProps> = ({ children }) => {
  return <span>{children}</span>;
};

export default Text;