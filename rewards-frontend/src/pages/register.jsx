import { Box, Flex, Stack } from '@chakra-ui/react';
import { RegisterForm } from '../components/Auth/RegisterForm';

export const RegisterPage = () => {
  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh">
      <Stack spacing={8}>
        <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Stack spacing={2}>
            <RegisterForm />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
