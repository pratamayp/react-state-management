import React, { createContext } from 'react';

const CounterContext = createContext({
  count: 1,
  setCount: () => {},
});

const CounterProvider = ({ children }) => {
  const [count, setCount] = React.useState(1);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
