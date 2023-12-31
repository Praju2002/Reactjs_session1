import React, { createContext, useState } from 'react';

// Create context for fruit name
export const FruitContext = createContext();

// Base component containing the context provider
const ContextComponent = ({ children }) => {
  const [fruitName, setFruitName] = useState('Apple');

  return (
    <FruitContext.Provider value={{ fruitName, setFruitName }}>
      {children}
    </FruitContext.Provider>
  );
};

export default ContextComponent;