import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { useAuth } from '../providers/Auth';
import { ToogleThemeButtom } from './Header/ToogleTheme';
import PropTypes from 'prop-types';
import { ChevronDownIcon } from '@chakra-ui/icons';
export const Header = ({ handleNavMenu }) => {
  const { logout, accountData } = useAuth();

  const handleLogout = () => logout();

  return (
    <Flex bg="cyan.800" p={4} alignItems="center" justifyContent="space-between">
      <Wrap>
        <WrapItem display={{ base: 'flex', md: 'none' }}>
          <Text colorScheme="cyan">Balance: {accountData.credits}</Text>
        </WrapItem>
      </Wrap>
      <Wrap>
        <WrapItem>
          <ToogleThemeButtom />
        </WrapItem>
        <WrapItem>
          <Menu>
            <MenuButton colorScheme="cyan" as={Button} rightIcon={<ChevronDownIcon />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleNavMenu} name="redemptions">
                Redemptions
              </MenuItem>
              <MenuItem onClick={handleNavMenu} name="rewards">
                Rewards
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};

Header.propTypes = {
  handleNavMenu: PropTypes.func.isRequired,
};
