import { createStyles, Group, Stack, Image, Text, Box } from '@mantine/core';
import { FC } from 'react';

const useStyles = createStyles(theme => ({
  wrapper: {
    width: '100%',
    marginTop: '40px',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      padding: '0px 20px',
      marginTop: '10px',
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
  imageStyle: {
    width: '170px',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      width: '40px',
    }
  },
  labelStyle: {
    fontSize: '20px',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      fontSize: '16px',
    }
  }
}));

export const SectionInvest: FC = () => {
  const { classes } = useStyles();

  const packages: { label: string, image: string }[] = [
    {
      label: 'Gold',
      image: '/images/home/iconGold.svg',
    },
    {
      label: 'Oil',
      image: '/images/home/iconOil.svg',
    },
    {
      label: 'Natural Gas',
      image: '/images/home/iconGas.svg',
    },
    {
      label: 'Stocks',
      image: '/images/home/iconStocks.svg',
    },
    {
      label: 'Crypto',
      image: '/images/home/iconCrypto.svg',
    },
  ]

  return (
    <Box mt={20} id="invest">
      <Text component='span' color={"#1566CE"} className={classes.title}>Investment Packages</Text>
      <Group className={classes.wrapper} position="apart">
        {packages.map((items, index) =>
          <Stack key={index} align="center">
            <Image src={items.image} className={classes.imageStyle}/>
            <Text color={"#1566CE"} weight="bold" className={classes.labelStyle}>{items.label}</Text>
          </Stack>)
        }
      </Group>
    </Box>
  )
}
