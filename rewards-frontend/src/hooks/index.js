import { useMediaQuery } from '@chakra-ui/react';

export const useMobileDetect = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return isMobile;
};
