import { useZustandStore } from '../../store/zustand';

export const Children2 = () => {
  const { count, setCount } = useZustandStore();
  return (
    <div className="children">
      <h4 className="children-header">Children 2</h4>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};
