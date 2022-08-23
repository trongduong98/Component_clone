import { createStyles, TextInput, Image, Button, Box, Grid, Text, Input, Divider } from '@mantine/core';
import { FC } from 'react';

const useStyles = createStyles(theme => ({
  wrapper: {
    width: '100%',
    backgroundColor: '#2A2D41',
    color: '#ffffff',
    height: '400px',
    marginTop: '80px',
    padding: '10px 60px',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      padding: '10px 20px',
      height: '100%',
    }
  },
  leftFooter: {
    width: '40%',
    height: '100%',
    padding: '40px 0',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      width: '100%',
    }
  },
  RightFooter: {
    width: '40%',
    height: '100%',
    color: '#ffffff',
    padding: '40px',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      width: '100%',
    }
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '60px',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      display: 'block',
    }
  },
  copyRight: {
    display: 'flex',
    justifyContent: 'center',
    margin: '30px 0',
    
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      margin: '0',
    }
  },
}));

export const Footer: FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper} id="footer">
      <Box className={classes.footerContent}>
        <Box className={classes.leftFooter}>
          <Image src='/images/home/iconLogo.svg' width={60} />
          <Input mt={20} placeholder='Enter your email' rightSection={<Button>Get Started</Button>} styles={{
            wrapper: {
              width: '90%'
            }
          }}/>
        </Box>
        <Box className={classes.RightFooter}>
          <Grid>
            <Grid.Col span={6}>
              <Text weight="bold" mb={15}>Quick Links</Text>
              <Text mt={10}>FAQs</Text>
              <Text mt={10}>Help Center</Text>
              <Text mt={10}>Documents</Text>
              <Text mt={10}>How it work</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text weight="bold" mb={15}>Contact</Text>
              <Text mt={10}>ssb@mail.com</Text>
              <Text mt={10}>+0 123 123 123</Text>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
      <Divider />
      <Text className={classes.copyRight}>Copyright © 2022 SSB. All Rights Reserved.</Text>
    </Box>
  )
}
