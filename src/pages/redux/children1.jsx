import { useDispatch } from 'react-redux';
import { add, reduce } from '../../store/redux/count';

export const Children1 = () => {
  const dispatch = useDispatch();

  return (
    <div className="children">
      <h4 className="children-header">Children 1</h4>
      <div>
        <button onClick={() => dispatch(reduce())}>-</button>
        <button onClick={() => dispatch(add())}>+</button>
      </div>
    </div>
  );
};
