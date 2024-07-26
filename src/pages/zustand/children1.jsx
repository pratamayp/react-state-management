import { useZustandStore } from '../../store/zustand';

export const Children1 = () => {
  const { count, setCount } = useZustandStore();
  return (
    <div className="children">
      <h4 className="children-header">Children 1</h4>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};
