import { Box, createStyles, Group, keyframes } from '@mantine/core';
import { FC, useState } from 'react';
import { Login } from './components/Login';
import { Register } from './components/Register';

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 'max-content',
    boxShadow: '1px 1px 10px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    position: 'relative',

    //default should remove when code content
    '> div': {
      width: '400px',
      height: '450px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }
  },
  image: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 2,
    right: 0,
    background: theme.white,
    transition: '0.5s',

    "img": {
      height: '50%',
      alignSelf: 'center',
    }
  },
  layer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(to bottom, ${theme.fn.rgba('#1566CE', 0.5)}, #00B8AD)`,
  }
}));

export let OnChangeTab: (tab: 'login' | 'register') => any = () => true;
export const AccountScreen: FC = () => {
  const { classes } = useStyles();
  const [tabs, setTabs] = useState('login' as 'login' | 'register')

  OnChangeTab = (tag) => setTabs(tag);

  return (
    <Box className={classes.wrapper}>
      <Group spacing={0} className={classes.content}>
        <Login />
        <Register />

        <Box className={classes.image} style={{ transform: `translateX(${tabs === 'register' ? '-100%' : 0})` }}>
          <Box className={classes.layer}>
            <img alt='' src='/images/account/account.png' />
          </Box>
        </Box>
      </Group>
    </Box>
  )
}
