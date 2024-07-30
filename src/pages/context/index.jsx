import { CounterProvider } from '../../store/context';
import { useCountContext } from '../../hooks/use-counter-context.tsx';
import { Children1 } from './children1';
import { Children2 } from './children2';
import { ContentLayout } from '../../component/content-layout.jsx';

export const ContextWrapper = () => {
  return (
    <CounterProvider>
      <Context />
    </CounterProvider>
  );
};

const Context = () => {
  const { count } = useCountContext();
  return (
    <ContentLayout type="React Context API" count={count}>
      <Children1 />
      <Children2 />
    </ContentLayout>
  );
};
