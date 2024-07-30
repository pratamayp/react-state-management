import { Children1 } from './children1';
import { Children2 } from './children2';
import { useZustandStore } from '../../store/zustand';
import { ContentLayout } from '../../component/content-layout';

export const Zustand = () => {
  const { count } = useZustandStore();
  return (
    <ContentLayout type="Zustand" count={count}>
      <Children1 />
      <Children2 />
    </ContentLayout>
  );
};
