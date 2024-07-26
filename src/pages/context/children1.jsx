import { useCountContext } from '../../hooks/use-counter-context';

export const Children1 = () => {
  const { count, setCount } = useCountContext();
  return (
    <div className="children">
      <h4 className='children-header'>Children 1</h4>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};
