import { createStyles, Group, Stack, Image, Text } from '@mantine/core';
import { FC } from 'react';

const useStyles = createStyles(theme => ({
  wrapper: {
    width: '100%',
  }
}));

export const SectionAbout: FC = () => {
  const { classes } = useStyles();

  const cards: { label: string, image: string, description: string }[] = [
    {
      label: 'Digital Wallet',
      image: '/images/home/wallet.png',
      description: 'Easy way to manage your wallet',
    },
    {
      label: 'Invest',
      image: '/images/home/invest.png',
      description: 'Easy way to invest',
    },
    {
      label: 'Transfer',
      image: '/images/home/transfer.png',
      description: 'Quick transfer',
    },
    {
      label: 'History',
      image: '/images/home/history.png',
      description: 'Check your wallet history',
    }
  ]

  return (
    <Group className={classes.wrapper} position="apart" py={80}>
      {cards.map((card, key) => <Stack key={key} align="center">
        <Image src={card.image} width={200} />
        <Text color={"#1566CE"} weight="bold" size="xl">{card.label}</Text>
        <Text sx={{ width: '200px', textAlign: 'center' }} px={10}>{card.description}</Text>
      </Stack>)}
    </Group>
  )
}
