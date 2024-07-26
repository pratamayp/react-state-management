import { Route, Routes } from 'react-router-dom';
import { Zustand, ContextWrapper as Context, Home } from '../pages';

export const RouteView = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/context" element={<Context />} />
        <Route path="/zustand" element={<Zustand />} />
      </Routes>
    </div>
  );
};
