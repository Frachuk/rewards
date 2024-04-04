import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { DashboardCard } from './Dashboard/DashboardCard';
import PropTypes from 'prop-types';

export const NavBar = ({ handleNavMenu }) => {
  return (
    <Flex direction="column" p={4} h="-webkit-fit-content">
      <VStack spacing={4} align="stretch">
        <DashboardCard />
        <Text fontWeight="bold" textAlign="left">
          Rewards
        </Text>
        <Button colorScheme="cyan" mb={2} onClick={handleNavMenu} name="rewards">
          Browse
        </Button>
        <Text textAlign="left">Redemptions</Text>
        <Button colorScheme="cyan" mb={2} onClick={handleNavMenu} name="redemptions">
          History
        </Button>
      </VStack>
    </Flex>
  );
};

NavBar.propTypes = {
  handleNavMenu: PropTypes.func.isRequired,
};
