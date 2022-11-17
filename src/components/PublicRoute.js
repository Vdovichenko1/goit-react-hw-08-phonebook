import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogIn } from 'redux/auth/authSelectors';

export default function RestrictedRoute({ component, redirectTo = '/' }) {
  const logIn = useSelector(selectLogIn);
  return logIn ? <Navigate to={redirectTo} /> : component;
}
