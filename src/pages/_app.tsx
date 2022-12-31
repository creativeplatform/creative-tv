import React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { WagmiConfig, createClient } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import { getDefaultClient, ConnectKitProvider } from 'connectkit'
import { siwe } from "../pages/api/siwe/siwe";
import '../styles/globals.css'
import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';

const walletClient = createClient(
  getDefaultClient({
    appName: "CRTV",
    alchemyId: process.env.ALCHEMY_API_KEY,
    chains: [polygonMumbai]
  }),
);

const client = createReactClient({
  provider: studioProvider({ apiKey: process.env.STUDIO_API_KEY }),
});
 
const livepeerTheme: ThemeConfig = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};

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
          <LivepeerConfig client={client} theme={livepeerTheme}>
            <Component {...pageProps} />
          </LivepeerConfig>
        </ChakraProvider>
      </ConnectKitProvider>
      </siwe.Provider>
    </WagmiConfig>
  )
}
