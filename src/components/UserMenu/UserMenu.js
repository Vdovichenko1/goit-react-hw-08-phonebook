import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutUser } from 'redux/auth/authOperations';
import { useAuth } from 'redux/auth/use/useAuth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      display="flex"
      alignItems="center"
      textAlign="center"
      marginRight="20px"
    >
      <Text fontSize="16px" fontWeight="500" color="purple" marginRight="10px">
        Welcome, {user.name}
      </Text>
      <Button
        colorScheme="purple"
        type="button"
        onClick={() => dispatch(logOutUser())}
      >
        Logout
      </Button>
      <Button colorScheme="purple" marginLeft="15px">
        <NavLink to="/contacts">Contacts</NavLink>
      </Button>
    </Box>
  );
}
