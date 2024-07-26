import { Children1 } from './children1';
import { Children2 } from './children2';
import { useZustandStore } from '../../store/zustand';

export const Zustand = () => {
  const { count } = useZustandStore();
  return (
    <>
      <h3>This state is managed by Zustand</h3>
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
