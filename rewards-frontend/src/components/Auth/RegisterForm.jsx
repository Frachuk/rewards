import { Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import FetchService from '../../services/fetch';
import { useAuth } from '../../providers/Auth';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { setAccountData } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      accountData: {
        name: formData.get('accountName'),
        password: formData.get('password'),
      },
      userData: {
        first_name: formData.get('firstName'),
        last_name: formData.get('lastName'),
        email: formData.get('email'),
        age: formData.get('age'),
      },
    };

    try {
      const { data: responseData } = await FetchService.post(data, 'account');
      setAccountData(responseData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Register failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading as="h2" size="lg" mb={4}>
        Register
      </Heading>
      <Stack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Account Name</FormLabel>
          <Input placeholder="Account Name" name="accountName" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input placeholder="Password" type="password" name="password" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="First Name" name="firstName" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Last Name" name="lastName" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" name="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Age</FormLabel>
          <Input placeholder="Age" type="number" name="age" />
        </FormControl>
        <Button colorScheme="cyan" size="lg" type="submit">
          Register
        </Button>
      </Stack>
    </form>
  );
};
