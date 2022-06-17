import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '../src/components/Layout';
import { theme }from "../src/chakra"

const App = ({ Component, pageProps }: AppProps) => {
  const { user } = pageProps;
  return (
    <ChakraProvider theme={theme}>
    <CSSReset />
    <SessionProvider session={pageProps.session}>
    <UserProvider user={user}>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </UserProvider>
    </SessionProvider>
    </ChakraProvider>
  );
}
                                                    
export default App;
