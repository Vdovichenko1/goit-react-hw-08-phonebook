import { Box} from '@chakra-ui/react';
import Navigator from 'components/Navigator';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLogIn } from 'redux/auth/authSelectors';

export default function AppBar() {
  const logIn = useSelector(selectLogIn);
  return (
    <Box
      display=" flex "
      alignItems=" center "
      justifyContent=" space-between "
      marginBottom="50px"
      marginTop="30px"
      borderBottom="2px solid green"
      paddingBottom="7px"
    >
      <Box fontSize="22px" fontWeight="700" color="green" marginLeft="10px">
        
        <Link to='/'>Phonebook</Link>
      </Box>
      {logIn ? <UserMenu /> : <Navigator />}
    </Box>
  );
}
