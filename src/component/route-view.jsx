import { Route, Routes } from 'react-router-dom';
import { ContextWrapper as Context, Home } from '../pages';

export const RouteView = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </div>
  );
};
