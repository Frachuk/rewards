import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react';
import { useAuth } from '../../providers/Auth';

export const RewardCard = (reward) => {
  const { name, description, points_required, handleRedeem } = reward;
  const { accountData } = useAuth();

  return (
    <Card maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter justifyContent="center">
        <Button
          colorScheme="cyan"
          onClick={() => handleRedeem(reward)}
          isDisabled={accountData.credits < points_required}
        >
          Redeem: {points_required}
        </Button>
      </CardFooter>
    </Card>
  );
};
