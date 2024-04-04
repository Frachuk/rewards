import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { useAuth } from '../../providers/Auth';

export const DashboardCard = () => {
  const { accountData } = useAuth();

  return (
    <Flex alignItems="center" p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Avatar name={accountData.first_name} />
      <Box ml={3} textAlign="left">
        <Text>
          {accountData.name} {accountData.last_name}
        </Text>
        <Text>Balance: {accountData.credits}</Text>
      </Box>
    </Flex>
  );
};
