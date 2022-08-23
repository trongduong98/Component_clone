import { Container, createStyles, Group, Image, UnstyledButton, Text, MediaQuery, ActionIcon, Drawer, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import { IconMenu2 } from '@tabler/icons';
import { FC, useState } from 'react';
import { Link } from 'react-scroll';

const useStyles = createStyles(theme => ({
  container: {
    width: '1100px',
    maxWidth: '100%',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      padding: '20px 15px'
    }
  },
  button: {
    border: `1px solid ${theme.colors.primary[5]}`,
    borderRadius: '20px',
    color: theme.colors.primary[5],
    fontWeight: 'bold',
  },
  navigator: {

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      flexDirection: 'column',
      paddingTop: '30px',

      '.items': {
        flexDirection: 'column',
        marginRight: 0,
        marginBottom: '30px',
      }
    }
  },
  item: {
    cursor: 'pointer',
  }
}));

export const Header: FC = () => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`, false);

  return (
    <Container fluid className={classes.container} py={40} px={0}>
      <Group sx={{ width: '100%' }} position="apart">
        <NextLink href={"/"}>
          <Image src='/images/logo.png' height={50} />
        </NextLink>

        {!matches && <Navigatior />}

        <MediaQuery largerThan={"xs"} styles={{ display: 'none' }}>
          <ActionIcon onClick={() => setOpened(true)}>
            <IconMenu2 />
          </ActionIcon>
        </MediaQuery>
      </Group>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="right"
      >
        <Navigatior onClose={setOpened} />
      </Drawer>
    </Container>
  )
}

const Navigatior: FC<{ onClose?: any }> = ({ onClose }) => {
  const { classes } = useStyles();

  return <Group className={classes.navigator}>
    <Group spacing={35} mr={50} className="items">
      <Text className={classes.item}>Overview</Text>
      <Text className={classes.item}>Features</Text>
      <Link to="invest" spy smooth onClick={() => onClose(false)}><Text className={classes.item}>Invest</Text></Link>
      <Link to="footer" spy smooth onClick={() => onClose(false)}><Text className={classes.item}>About Us</Text></Link>
    </Group>

    <UnstyledButton px={30} className={classes.button} py={10}>
      Login
    </UnstyledButton>
    <UnstyledButton px={30} className={classes.button} py={10}>
      Sign Up
    </UnstyledButton>
  </Group>
}
