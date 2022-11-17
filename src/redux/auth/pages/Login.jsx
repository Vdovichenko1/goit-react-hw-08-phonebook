import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logInUser } from "../authOperations";

export default function Login() {
    const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logInUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box display='flex-wrap' justifyContent='center' textAlign='center' alignItems='center'>
      <Text marginBottom='15px' fontSize='20px' fontWeight='700' color='teal' >Login</Text>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box display='flex-wrap' justifyContent='center' alignItems='center' textAlign='center' color='teal' fontWeight='600'>
          <Text marginBottom='15px'>
          Email
          <Input alignItems='center' placeholder='email' width='auto' marginLeft='15px' type="email" name="email" />
        </Text>
        <Text marginBottom='15px'>
          Password
          <Input alignItems='center' placeholder='password' width='auto' marginLeft='15px' type="password" name="password" />
        </Text>
        <Button colorScheme='teal' variant='solid' type="submit">Log In</Button>
        </Box>
      </form>
    </Box>
  );
}
