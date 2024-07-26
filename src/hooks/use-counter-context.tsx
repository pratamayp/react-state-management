import { useContext } from 'react';
import { CounterContext } from '../store/context';

const useCountContext = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error(
      'useCountContext must be used within an CountContextProvider'
    );
  }

  return context;
};

export { useCountContext };
