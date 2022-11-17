import { NavLink } from 'react-router-dom';

export default function Navigator() {
  return (
    <div>
      <NavLink to="/register">
        <button>Register</button>
      </NavLink>
      <NavLink to="/login">
        <button>Log In</button>
      </NavLink>
    </div>
  );
}
