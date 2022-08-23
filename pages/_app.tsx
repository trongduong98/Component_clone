import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useStore } from 'react-redux';
import { AppModule } from 'modules/app';
import { RESET_STORE, wrapper } from 'AppStore';
import { Store } from 'redux';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

const AppContent: FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  const store = useStore();

  useEffect(() => {
    store.dispatch({ type: RESET_STORE })
  }, [])

  return <>
    <Component {...pageProps} />
  </>
}

const App: any = (props: AppProps) => {
  const themeColors = AppModule.getThemeColors();

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: {
            ...themeColors,
          }
        }}
      >
        <NotificationsProvider>
          <AppContent {...props} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

App.getInitialProps = wrapper.getInitialAppProps((store: Store) => async ({ Component, ctx }) => {
  const url = ctx.req?.url as string;
  const ignoreURL = ['/_next', '/styles', '/fonts', '/images'];
  const isAvailable = !!ctx.req && !ignoreURL.find(i => url.indexOf(i) !== -1);

  if (isAvailable) { }

  return {
    pageProps: {
      ...(Component.getInitialProps ? await
        Component.getInitialProps({ ...ctx, store }) : {}),
      pathname: ctx.pathname
    }
  }
})

export default wrapper.withRedux(App)