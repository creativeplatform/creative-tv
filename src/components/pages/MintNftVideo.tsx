import React, { ReactNode } from "react";
import { useRouter } from 'next/router';
import {
  Box,BreadcrumbItem, Icon, BreadcrumbLink, Breadcrumb
} from "@chakra-ui/react";

import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';

import { AptosClient } from 'aptos';
import { createContext, useMemo } from 'react';
import AptosNft from './AptosNft';
 
interface HeaderProps {
  children: ReactNode
}

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
  }),
});

export const AptosContext = createContext<AptosClient | null>(null);

  const MintNftVideo = ({ children }: HeaderProps): JSX.Element => {
    
    const router = useRouter();
    const query = router.query;

    // create an aptos client using the devnet endpoint on app mount
    const aptosClient = useMemo(
      () => new AptosClient('https://fullnode.devnet.aptoslabs.com/v1'),
      [],
    );
    return (
      <Box>
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => router.push('/')}>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage className="active-crumb">
                <BreadcrumbLink href='#'>Mint NFT Video</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
      <AptosContext.Provider value={aptosClient}>
        <LivepeerConfig client={livepeerClient}>
          <AptosNft />
        </LivepeerConfig>
      </AptosContext.Provider>
      </Box>
    );
}
export default MintNftVideo
  