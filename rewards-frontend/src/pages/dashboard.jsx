import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { NavBar } from '../components/Nav';
import { useEffect, useState } from 'react';
import { RewardsService } from '../services/rewards';
import { RewardContainer } from '../containers/Rewards';
import { useAuth } from '../providers/Auth';
import { AccountsService } from '../services/accounts';
import { RedemptionsContainer } from '../containers/Redemptions';

export const DashboardPage = () => {
  const bg = useColorModeValue('linear(to-tr, cyan.900, #E3F9F9)', 'cyan.900');
  const [rewards, setRewards] = useState([]);
  const [content, setContent] = useState('rewards');
  const { accountData, setAccountData } = useAuth();

  const contentHandler = {
    rewards: rewards.length ? <RewardContainer rewards={rewards} /> : <></>,
    redemptions: <RedemptionsContainer />,
  };

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { rewards },
      } = await RewardsService.getAll();
      const {
        data: {
          result: [updatedAccountData],
        },
      } = await AccountsService.getCreditsByUserId(accountData.id);

      setRewards(rewards);
      setAccountData(updatedAccountData);
    };

    fetchData();
  }, [accountData.id, setAccountData]);

  const handleNavMenu = (e) => setContent(e.target.name);

  return (
    <Grid
      gridTemplateAreas={{
        base: `'header' 'main'`,
        md: `'header header' 'nav main'`,
      }}
      gridTemplateColumns={{
        base: 'auto',
        md: '0.15fr 1fr',
      }}
      gridTemplateRows={{
        base: 'auto 100%',
        md: 'auto 1fr',
      }}
      h="100vh"
      fontWeight="bold"
    >
      <GridItem area={'header'}>
        <Header handleNavMenu={handleNavMenu} />
      </GridItem>
      <GridItem display={{ base: 'none', md: 'flex' }} area={'nav'}>
        <NavBar handleNavMenu={handleNavMenu} />
      </GridItem>
      <GridItem area={'main'} bgGradient={bg}>
        {contentHandler[content]}
      </GridItem>
    </Grid>
  );
};
