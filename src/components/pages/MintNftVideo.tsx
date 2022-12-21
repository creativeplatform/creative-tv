import React, { ReactNode } from "react";

import {
  Box,
} from "@chakra-ui/react";

  
  interface HeaderProps {
    children: ReactNode
  }

  const MintNftVideo = ({ children }: HeaderProps): JSX.Element => {
   
    return (
        <Box>
            <h1>Mint NFT Video</h1>
        </Box>
    );
}
export default MintNftVideo
  