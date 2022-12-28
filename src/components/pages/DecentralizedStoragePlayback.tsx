import { Player } from '@livepeer/react';
import { parseArweaveTxId, parseCid } from 'livepeer/media';
 
import { useMemo, useState } from 'react';
import {
    Text, Input, Box, SimpleGrid, Center, Stack, VStack, WrapItem, Wrap, Button
  } from "@chakra-ui/react";

export const DecentralizedStoragePlayback = () => {
  const [url, setUrl] = useState<string>('');
 
  const idParsed = useMemo(() => parseCid(url) ?? parseArweaveTxId(url), [url]);
  return (
    <>
    <VStack 
        spacing={4}
        align='stretch'>
      <Box>
        <Center>
            <Text>IPFS or Arweave URL</Text>
            <Input
            w='80%'
            type="text"
            placeholder="ipfs://... or ar://"
            onChange={(e) => setUrl(e.target.value)}
            />
    
            {url && !idParsed && (
                <Text>Provided value is not a valid identifier.</Text>
            )}
        </Center>
      </Box >
        <Box>
        {idParsed && (
            <Player
            title={idParsed.id}
            src={url}
            autoPlay
            muted
            autoUrlUpload={{ fallback: true, ipfsGateway: 'https://w3s.link' }}
            />
        )}
        </Box>
      </VStack>
    </>
  );
};