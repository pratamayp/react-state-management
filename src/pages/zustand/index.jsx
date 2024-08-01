import { Children1 } from './children1';
import { Children2 } from './children2';
import { useZustandStore } from '../../store/zustand';
import { CounterLayout } from '../../component/counter-layout';

export const Zustand = () => {
  const { count } = useZustandStore();
  return (
    <CounterLayout type="Zustand" count={count}>
      <Children1 />
      <Children2 />
    </CounterLayout>
  );
};
