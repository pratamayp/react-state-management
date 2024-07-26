import { NavLink } from 'react-router-dom';

export const RouteLink = () => {
  return (
    <ul id="menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/context">Context</NavLink>
      </li>
      <li>
        <NavLink to="/zustand">Zustand</NavLink>
      </li>
    </ul>
  );
};
