import { Box, createStyles } from '@mantine/core';
import { FC } from 'react';
import { SectionAbout } from './components/SectionAbout';
import { SectionIntro } from './components/SectionIntro';
import { SectionFuture } from './components/SectionFuture';
import { SectionInvest } from './components/SectionInvest';
import { SectionContact } from './components/SectionContact';
import { Footer } from './components/Footer';

const useStyles = createStyles(theme => ({
  appWrapper: {
    width: '100%',
    height: '100%',
  },
  body: {
    width: '1100px',
    maxWidth: '100%',
    margin: '0 auto',
  }
}));

export const HomeScreen: FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.appWrapper}>
      <SectionIntro />

      <div className={classes.body}>
        <SectionAbout />
        <SectionFuture />
        <SectionInvest />
        <SectionContact />
      </div>
      
      <Footer />
    </Box>
  )
}
