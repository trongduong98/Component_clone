import { Box, createStyles } from '@mantine/core';
import { FC } from 'react';
import { SectionAbout } from './components/SectionAbout';
import { SectionIntro } from './components/SectionIntro';

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
      </div>
    </Box>
  )
}
