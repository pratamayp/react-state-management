import { useCountContext } from '../../hooks/use-counter-context';

export const Children1 = () => {
  const { count, setCount } = useCountContext();
  return (
    <div className="children">
      <div>Children 1</div>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};
