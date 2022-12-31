import React, { ReactNode } from 'react';
import {
  chakra,
  Stack,
  HStack,
  Text,
  Box,
  Flex,
  Link,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';
import { useGlitch } from "react-powerglitch";

const HeroSection = () => {
  const glitch = useGlitch();
  return (
    <Box>
    <Stack
      p={{ base: 5, md: 10 }}
      direction={{ base: 'column', md: 'row' }}
      bgImage={{
        base: 'none',
        md: 'url(https://bafybeiefwmq6zykvyhwih5qbhucxrc34zbtxjbwboz7hdgkyh3u6p2ykfa.ipfs.nftstorage.link/)'
      }}
      backgroundSize="850px"
      backgroundPosition="center right"
      backgroundRepeat="no-repeat"
      minH={{ base: 'unset', md: '450px' }}
      
    >
      <Box
        bgImage={{ base: 'none', md: 'linear-gradient(45deg, #e9ecef 25%, rgba(0, 0, 0, 0) 95%)' }}
        position="relative"
        top="0"
        bottom="0"
        left="0"
        right="0"
        zIndex="0"
        opacity="0.8"
      ></Box>
      <Stack
        pos="relative"
        zIndex={1}
        direction="column"
        justifyContent="center"
        spacing={6}
        maxW="xl"
      >
        <chakra.h1
          fontSize={{ base: '3xl', sm: '5xl' }}
          lineHeight={1}
          fontWeight="bold"
          textAlign="left"
          ref={glitch.ref}
        >
          Empowering Creators <br />
        </chakra.h1>
        <Text
          fontSize="1.2rem"
          textAlign="left"
          lineHeight="2"
          fontWeight="400"
          color={useColorModeValue('gray.500', 'gray.90')}
        >
          💰 Earn 100% of the streaming revenue.<br/> 
          👀 Pay your viewers for watching your stream.<br /> 
          🔐 A decentralized, secure platform that&apos;s easy to use.
        </Text>
        <HStack spacing={{ base: 0, sm: 2 }} flexWrap="wrap">
          <chakra.button
            h={10}
            px={6}
            color="white"
            fontSize="md"
            rounded="md"
            mb={{ base: 2, sm: 0 }}
            zIndex={5}
            lineHeight={1}
            bg="brand.200"
            _hover={{ bg: '#EC407A' }}
          >
            Discover
          </chakra.button>
          <Flex
            as={Link}
            justify="center"
            h={10}
            px={6}
            lineHeight={1.18}
            rounded="md"
            fontWeight="bold"
            alignItems="center"
            bg={useColorModeValue('gray.200', 'gray.600')}
            _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
          >
            <Icon as={FaGithub} h={4} w={4} />
            <chakra.span ml={1}> Learn More</chakra.span>
          </Flex>
        </HStack>
      </Stack>
    </Stack>
    </Box>
  );
};

export default HeroSection;