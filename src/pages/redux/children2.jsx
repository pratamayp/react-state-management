import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { set } from '../../store/redux/slice';

export const Children2 = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="children">
      <h4 className="children-header">Children 2</h4>
      <div>
        <button onClick={() => dispatch(set(count - 1))}>-</button>
        <button onClick={() => dispatch(set(count + 1))}>+</button>
      </div>
    </div>
  );
};
