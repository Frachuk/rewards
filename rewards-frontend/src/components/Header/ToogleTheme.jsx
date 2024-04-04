import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ToogleThemeButtom = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button colorScheme="cyan" onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon>{'Dark'}</MoonIcon> : <SunIcon>{'light'}</SunIcon>}
    </Button>
  );
};
