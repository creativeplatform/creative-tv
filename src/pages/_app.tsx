import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { WagmiConfig, createClient } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import { getDefaultClient, ConnectKitProvider } from 'connectkit'


const walletClient = createClient(
  getDefaultClient({
    appName: "CRTV",
    alchemyId: "https://polygon-mumbai.g.alchemy.com/v2/_wqOpwbI6KMgU_e-SmN3OuBQCz4kwrTr",
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
      <ConnectKitProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
