import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box display="flex-wrap" alignItems="center" justifyContent="center" textAlign='center'>
      <Text fontWeight={700} fontSize={48} textAlign="center" color="#57c3d5">
        Hello, friend!{' '}
          </Text>
          <Text marginTop='20px' fontWeight={500} fontSize={46} color="green">Come in don't be afraid, come out don't cry!</Text>
    </Box>
  );
}
