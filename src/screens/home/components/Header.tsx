import { Container, createStyles, Group, Image, UnstyledButton } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { FC } from 'react';

const useStyles = createStyles(theme => ({
  container: {
    width: '1100px',
    maxWidth: '100%',
  },
  button: {
    border: `1px solid ${theme.colors.primary[5]}`,
    borderRadius: '20px',
    color: theme.colors.primary[5],
    fontWeight: 'bold',
  }
}));

export const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <Container fluid className={classes.container} py={40} px={0}>
      <Group sx={{ width: '100%' }} position="apart">
        <NextLink href={"/"}>
          <Image src='/images/logo.png' height={50} />
        </NextLink>

        <Group>
          <UnstyledButton px={30} className={classes.button} py={10}>
            Login
          </UnstyledButton>
          <UnstyledButton px={30} className={classes.button} py={10}>
            Sign Up
          </UnstyledButton>
        </Group>
      </Group>
    </Container>
  )
}
