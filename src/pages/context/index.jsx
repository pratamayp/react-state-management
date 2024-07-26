import { CounterProvider } from '../../store/context';
import { useCountContext } from '../../hooks/use-counter-context.tsx';
import { Children1 } from './children1';
import { Children2 } from './children2';

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
    <>
      <h3>This state is managed by React Context API</h3>
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
