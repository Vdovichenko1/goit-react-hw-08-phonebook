import Navigator from 'components/Navigator';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectLogIn } from 'redux/auth/authSelectors';

export default function AppBar() {
  const logIn = useSelector(selectLogIn);
  return (
    <>
      <h1> Phonebook </h1>
      {logIn ? <UserMenu /> : <Navigator />}
    </>
  );
}