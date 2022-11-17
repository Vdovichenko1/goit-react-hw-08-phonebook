import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';
import { useAuth } from 'redux/auth/use/useAuth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </button>
    </div>
  );
}
