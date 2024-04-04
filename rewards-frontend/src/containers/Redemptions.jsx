import { SimpleGrid, Table, TableContainer, Th, Thead, Tr } from '@chakra-ui/react';
import { RedemptionItem } from '../components/Redemptions/RedemptionItem';
import { useEffect, useState } from 'react';
import { RedemptionsService } from '../services/redemptions';
import { useAuth } from '../providers/Auth';
export const RedemptionsContainer = () => {
  const { accountData } = useAuth();
  const [redemptions, setRedemptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { result: redemptions },
      } = await RedemptionsService.getByUserId(accountData.id);

      setRedemptions(redemptions);
    };

    fetchData();
  }, [accountData.id]);

  return (
    <SimpleGrid p={4}>
      <TableContainer>
        <Table variant="striped" colorScheme="cyan">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Description</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          {redemptions.map((redemption) => (
            <RedemptionItem key={redemption.date} {...redemption} />
          ))}
        </Table>
      </TableContainer>
    </SimpleGrid>
  );
};
