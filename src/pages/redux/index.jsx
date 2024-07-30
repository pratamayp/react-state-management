import { Provider } from 'react-redux';
import store from '../../store/redux/store';
import { useSelector } from 'react-redux';
import { Children1 } from './children1';
import { Children2 } from './children2';

export const ReduxWrapper = () => {
  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  );
};

const Redux = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <h3>This state is managed by Redux</h3>
      <div className="parent">
        <div>
          <h4 className="parent-header">&apos;Global&apos; state</h4>
          <p className="parent-content">{count}</p>
        </div>
        <div className="children-wrapper">
          <Children1 />
          <Children2 />
        </div>
      </div>
    </>
  );
};
