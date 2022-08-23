import { createStyles, TextInput, Textarea, Image, Text, Box, Button } from '@mantine/core';
import { FC } from 'react';

const useStyles = createStyles(theme => ({
  container: {
    marginTop: '100px',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      marginTop: '40px',
      padding: '0px 20px',
    }
  },
  title: {
    fontSize: '40px',
    fontWeight: 800,
    lineHeight: '48px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      fontSize: '20px',
    }
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    marginTop: '40px',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      marginTop: '10px',
      display: 'block',
    }
  },
  leftContact: {
    backgroundColor: '#2A2D41',
    width: '40%',
    height: '300px',
    borderRadius: '10px 0 0 10px',
    padding: '30px',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      padding: '10px',
      width: '100%',
      height: '100px',
      borderRadius: '10px 10px 0 0',
    }
  },
  leftContactTitle: {
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    fontSize: '26px',
    fontWeight: 600,
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      fontSize: '16px',
    }
  },
  rightContact: {
    backgroundColor: '#F2F9FF',
    width: '60%',
    height: '300px',
    padding: '30px',
    borderRadius: '0 10px 10px 0',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      width: '100%',
      borderRadius: '0 0 10px 10px',
    }
  },
  information: {},
  text: {
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      fontSize: '12px',
    }
  },
  imageStyle: {
    width: '30px',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      width: '20px',
    }
  }
}));

export const SectionContact: FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Text component='span' color={"#1566CE"} className={classes.title}>Contact Us</Text>
      <Box className={classes.wrapper}>
        <Box className={classes.leftContact}>
          <Text className={classes.leftContactTitle}>Contact Information</Text>
          <Box className={classes.information}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: '#ffffff' }}>
              <Image src='/images/home/iconEmail.svg' className={classes.imageStyle} />
              <Text className={classes.text}>abcxyz@gmail.com</Text>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: '#ffffff' }}>
              <Image src='/images/home/iconPhone.svg' className={classes.imageStyle} />
              <Text className={classes.text}>+84000000000</Text>
            </Box>
          </Box>
        </Box>
        <Box className={classes.rightContact}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextInput sx={{ width: '46%' }} placeholder='Enter Name' />
            <TextInput sx={{ width: '46%' }} placeholder='Enter Email' />
          </Box>
          <Textarea mt={20} minRows={4} placeholder='Message' />
          <Box mt={20} sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <Button >Submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
