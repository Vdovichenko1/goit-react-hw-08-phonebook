import { useSelector } from 'react-redux';
import { selectLogIn, selectToken, selectUsername } from '../authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLogIn);
  const user = useSelector(selectUsername);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    user,
    token,
  };
};
