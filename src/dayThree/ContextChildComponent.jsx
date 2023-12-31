import React from 'react';
import { FruitContext } from '../provider/ContextProvider';


// ChildA component
const ChildA = () => {
  return (
    <div>
      <h2>Child A</h2>
      <ChildB />
    </div>
  );
};

// ChildB component using useContext to access fruitName
const ChildB = () => {
  const { fruitName } = React.useContext(FruitContext);

  return (
    <div>
      <h3>Child B</h3>
      <p>Fruit Name: {fruitName}</p>
    </div>
  );
};

export { ChildA, ChildB };


