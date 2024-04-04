import { Box, Button, ButtonGroup, Flex, SimpleGrid, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { RewardCard } from '../components/Rewards/RewardCard';
import { useAuth } from '../providers/Auth';
import { RedemptionsService } from '../services/redemptions';

export const RewardContainer = ({ rewards }) => {
  const { accountData, setAccountData } = useAuth();
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(rewards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const handlePrevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  const handleNextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));

  const handleRedeem = async (reward) => {
    const redemptionData = {
      user_id: accountData.id,
      reward_id: reward.id,
    };

    const {
      data: { credits },
    } = await RedemptionsService.redeem(redemptionData);

    setAccountData({ ...accountData, credits });
  };

  return (
    <Flex pt={4} pb={4} alignItems={{ base: 'baseline', md: 'center' }} justifyContent="center" height="100%">
      <Stack h={{ base: '-webkit-fill-available', md: 'initial' }} justifyContent={'end'}>
        <Box overflowY={{ base: 'scroll', md: 'initial' }} maxHeight={{ md: 'unset' }}>
          <SimpleGrid
            templateColumns={[
              'repeat(1, minmax(20%, 350px))',
              'repeat(2, minmax(20%, 300px))',
              'repeat(3, minmax(30%, 400px))',
            ]}
            templateRows="repeat(2, 1fr)"
            gap={4}
          >
            {rewards.slice(startIndex, endIndex).map((reward) => (
              <RewardCard key={reward.name} {...reward} handleRedeem={handleRedeem} />
            ))}
          </SimpleGrid>
        </Box>
        <Flex mt={4}>
          <ButtonGroup gap="2">
            <Button colorScheme="cyan" onClick={handlePrevPage} isDisabled={currentPage === 1}>
              Prev
            </Button>
            <Button colorScheme="cyan" onClick={handleNextPage} isDisabled={currentPage === totalPages}>
              Next
            </Button>
          </ButtonGroup>
        </Flex>
      </Stack>
    </Flex>
  );
};

RewardContainer.propTypes = {
  rewards: PropTypes.array.isRequired,
};
