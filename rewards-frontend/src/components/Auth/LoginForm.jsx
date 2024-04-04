import { Button, FormControl, Heading, Input, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAuth } from '../../providers/Auth';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login, accountData } = useAuth();

  const [input, setInput] = useState({
    name: '',
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(input);
  };

  useEffect(() => {
    if (accountData?.name) navigate('/dashboard');
  }, [accountData, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <Heading as="h2" size="lg" mb={4}>
        Login
      </Heading>
      <Stack spacing={4}>
        <FormControl isRequired>
          <Input placeholder="Account Name" name="name" onChange={handleInput} />
        </FormControl>
        <FormControl isRequired>
          <Input placeholder="Password" type="password" name="password" onChange={handleInput} />
        </FormControl>
        <Button colorScheme="cyan" size="lg" type="submit">
          Login
        </Button>
      </Stack>
    </form>
  );
};
