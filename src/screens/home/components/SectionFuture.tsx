import { createStyles, Grid, Box, Text, Image } from '@mantine/core';
import { FC } from 'react';

const useStyles = createStyles(theme => ({
  detailWrapper: {
    width: '100%',
    height: '100%',
    minHeight: '1000px',
    padding: '10px 0',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      display: 'block',
      padding: '20px',
    }
  },
  detailItem: {
    width: '100%',
    height: '100%',
    minHeight: '200px',

    "div:nth-child(even)": { 
      flexDirection: 'row-reverse',

      ".image": {
        display: 'flex',
        justifyContent: 'flex-end',
      }
    },

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      "div:nth-child(even)": { 
        flexDirection: 'row',
      },
    }
  },
  boxItem: {
    display: 'flex',
    margin: '40px 0', 
    marginTop: '90px',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      display: 'block',
      marginTop: '10px',
    }
  },
  widthContent: {
    width: '50%',
    display: 'block',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      width: '100%',
    }
  },
  widthContentText: {
    width: '50%',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      width: '100%',
    }
  },
  imageStyle: {
    width: '70%',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      width: '100%',
    }
  },
  textTitle: {
    color: theme.colors.primary[5],
  },
  titleStyle: {
    fontSize: '40px',
    fontWeight: 800,
    lineHeight: '48px',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: { 
      fontSize: '20px',
    }
  },
  textDescription: {},
}));

export const SectionFuture: FC = () => {
  const { classes } = useStyles();

  const futureDetail: { title: string, description: string, image: string, }[] = [
    {
      title: 'The first AI Trading System',
      description: `Maximize your returns. Stability. Simple click You can make investment just one click on the website, and let the AI taking care of your portfolio. No  lendthy processes and accessible worldwide.We understand the worth of your of hard working, and we take care and response for your money, as ours.SSB Capital is one of the most reliable AI trading platforms to make investment.  `,
      image: '/images/home/iconWallet.svg',
    },
    {
      title: 'Diversified financial products with good returns',
      description: 'We provide digital investing services especially in five scopes that are stocks, gold, crypto, oil and natural energy. We understand the worth of your hardworking, and we take care and response of your money, as ours.',
      image: '/images/home/iconInvest.svg',
    },
    {
      title: 'Investing become easy',
      description: 'Those who did not have the experience of trading previously, we will now have the chance to experience AI trading and analyzing system for the firrst time ever. With AI system will allows you to earn quickly at lowest risk rate, with the AI investing patform, earn with the fullest potential without the fear of getting scammed by taking risk of into a non-authentic, low yielding platform.',
      image: '/images/home/iconTransfer.svg',
    },
    {
      title: 'Maximize your profit with affiliate',
      description: 'Harnessing power of technology to serve millions of investors globally, we create affiliate as a new powerful financial tool for the future investing industry. Join the new trend of asset management.',
      image: '/images/home/iconHistory.svg',
    }
  ]

  return (
    <Box className={classes.detailWrapper}>
      <Box className={classes.detailItem}>
        {futureDetail.map((future, index) =>
          <Box key={index} className={classes.boxItem}>
            <Box className={`${classes.widthContent} image`}>
              <img alt='' src={future.image} className={classes.imageStyle} />
            </Box>
            <Box className={classes.widthContentText}>
              <Text component='span' color={"#1566CE"} className={classes.titleStyle}>{future.title}</Text>
                {/* <Text mt={10}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus sit dignissim elit rhoncus. Dictum vitae fermentum gravida sed neque. Sagittis, ullamcorper duis sapien massa fermentum, placerat. Non pulvinar suspendisse libero sem.
                </Text> */}
                <Text mt={10}>
                  {future.description}
                </Text>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
