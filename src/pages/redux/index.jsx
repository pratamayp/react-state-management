import { Provider } from 'react-redux';
import store from '../../store/redux/store';
import { useSelector } from 'react-redux';
import { Children1 } from './children1';
import { Children2 } from './children2';
import { ContentLayout } from '../../component/content-layout';

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
    <ContentLayout type="Redux" count={count}>
      <Children1 />
      <Children2 />
    </ContentLayout>
  );
};
