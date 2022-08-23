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
  }
}));

export const SectionIntro: FC = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Box className={classes.wrapper}>
      <Box sx={{ position: 'absolute', top: 0}}>
        <Header />
      </Box>

      <Group spacing={0} className={classes.content}>
        <Box>
          <Title order={1}>EASY WAY TO MANAGA</Title>
          <Title order={1}>YOUR WALLET</Title>

          <Text sx={{ width: '450px', fontStyle: 'italic' }} mt={10}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ipsa autem quibusdam explicabo ab laudantium, fugiat delectus,
            vero laborum dolorem distinctio ex at aperiam ratione odio repellat provident omnis error vel.
          </Text>

          <Button radius={30} mt={30} size="lg" sx={{ backgroundColor: '#1566CE', height: '48px', boxShadow: `5px 5px 20px ${theme.fn.rgba('#1566CE', 0.5)}` }}>
            Get Started
          </Button>
        </Box>

        <Box sx={{ position: 'relative', flex: '1 1 auto', display: 'flex', justifyContent: 'center' }}>
          <img alt="" src='/images/home/intro.png' style={{ width: '550px', maxWidth: '100%' }} />
        </Box>
      </Group>
    </Box>
  )
}
