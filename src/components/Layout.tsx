import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Just B3' }: Props) => (
  <div>
    <Head>
    <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box as="section" height="100vh" overflowY="auto">
    <Navbar />
    <Container  pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
      <main>{children}</main>
    </Container>
  </Box>
    <Footer />
  </div>
)

export default Layout
