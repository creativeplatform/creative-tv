import { useRouter } from 'next/router'
import React, { ReactNode } from "react";
import { DecentralizedStoragePlayback } from './DecentralizedStoragePlayback'
import {
    LivepeerConfig,
    createReactClient,
    studioProvider,
  } from '@livepeer/react';
import {
  Box, BreadcrumbItem, BreadcrumbLink, Breadcrumb
} from "@chakra-ui/react";
  
  interface HeaderProps {
    children: ReactNode
  }

  const PlayIpfsVideo = ({ children }: HeaderProps): JSX.Element => {
    const router = useRouter()
    const livepeerClient = createReactClient({
        provider: studioProvider({
            apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
        }),
    });
    return (
        <Box>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => router.push('/')}>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage className="active-crumb">
                    <BreadcrumbLink href='#'>Play IPFS Video</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <LivepeerConfig client={livepeerClient}>
                <DecentralizedStoragePlayback />
            </LivepeerConfig>
        </Box>
    );
}
export default PlayIpfsVideo
  