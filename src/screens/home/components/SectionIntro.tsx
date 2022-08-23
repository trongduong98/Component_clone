import { Box, createStyles, Group, Title, Text, Button, useMantineTheme, Image } from '@mantine/core';
import { FC } from 'react';
import { Header } from './Header';

const useStyles = createStyles(theme => ({
  wrapper: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#F2F9FF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  content: {
    width: '1100px',
    maxWidth: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      flexDirection: 'column-reverse',
      marginTop: '50px',

      ".about": {
        padding: '30px 20px',
      },

      ".image": {
        padding: '30px 20px',
      }
    }
  }
}));

export const SectionIntro: FC = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Box className={classes.wrapper}>
      <Box sx={{ position: 'absolute', top: 0, maxWidth: '100%' }}>
        <Header />
      </Box>

      <Group spacing={0} className={classes.content}>
        <Box sx={{ maxWidth: '100%' }} className="about">
          <Title order={1}>THE MOST RELIABLE AI TRADING</Title>
          <Text sx={{ width: '450px', fontStyle: 'italic', maxWidth: '100%' }} mt={10}>
            SSB Capital is a global online investment platform that allows investors to invest in financial innovation including Crypto Currency, funds, bonds and other new alternative financial products by using AI (Artificial Intelligence) trading system.
          </Text>
          <Button radius={30} mt={30} size="lg" sx={{ backgroundColor: '#1566CE', height: '48px', boxShadow: `5px 5px 20px ${theme.fn.rgba('#1566CE', 0.5)}` }}>
            Get Started
          </Button>
        </Box>

        <Box sx={{ position: 'relative', flex: '1 1 auto', display: 'flex', justifyContent: 'center' }} className="image">
          <img alt="" src='/images/home/intro.png' style={{ width: '550px', maxWidth: '100%' }} />
        </Box>
      </Group>
    </Box>
  )
}
