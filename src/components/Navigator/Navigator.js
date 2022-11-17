import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function Navigator() {
  return (
    <div>
      <NavLink to="/register">
        <Button colorScheme="teal" variant="outline" marginRight="10px">
          Register
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button colorScheme="teal" variant="outline" marginRight="10px">
          Log In
        </Button>
      </NavLink>
    </div>
  );
}
