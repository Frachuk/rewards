import { LoginForm } from '../components/Auth/LoginForm';
import { Box, Stack, Link as ChakraLink, Flex } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh">
      <Stack spacing={8}>
        <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Stack spacing={2}>
            <LoginForm />
            <ChakraLink as={ReactRouterLink} to="/register">
              New here? create an account
            </ChakraLink>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
