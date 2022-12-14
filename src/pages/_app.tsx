import React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { WagmiConfig, createClient } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import { getDefaultClient, ConnectKitProvider } from 'connectkit'
import { siwe } from "../pages/api/siwe/siwe";
import '../styles/globals.css'

const walletClient = createClient(
  getDefaultClient({
    appName: "CRTV",
    alchemyId: process.env.ALCHEMY_API_KEY,
    chains: [polygonMumbai]
  }),
);

const colors = {
  brand: {
    100: '#1a202c',
    200: '#161D2F',
    300: '#FacB80',
    400: '#ec407a',
    500: '#EE774D'
  },
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={walletClient}>
      <siwe.Provider>
      <ConnectKitProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ConnectKitProvider>
      </siwe.Provider>
    </WagmiConfig>
  )
}
