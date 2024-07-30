import { Route, Routes } from 'react-router-dom';
import {
  ReduxWrapper as Redux,
  Zustand,
  ContextWrapper as Context,
  Home,
} from '../pages';

export const RouteView = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/context" element={<Context />} />
        <Route path="/zustand" element={<Zustand />} />
        <Route path="/redux" element={<Redux />} />
      </Routes>
    </div>
  );
};
