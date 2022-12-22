import { useRouter } from 'next/router'
import React, { useState, useEffect, ReactNode } from "react";
import { capsFirst } from "../../utils";
import theme from "../../hooks/theme";

import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag, Box, BreadcrumbItem, Icon, BreadcrumbLink, Breadcrumb
} from "@chakra-ui/react";

import ChakraCarousel from "../../hooks/ChakraCarousel";
  
  interface HeaderProps {
    children: ReactNode
  }

  const SwiperControls = ({ children }: HeaderProps): JSX.Element => {
    const router = useRouter()
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/swiper-data")
          .then((res) => res.json())
          .then((res) => setData(JSON.parse(res.data)));
      }, []);
      
    return (
        <Box>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => router.push('/')}>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage className="active-crumb">
                    <BreadcrumbLink href='#'>Swiper Controls</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <ChakraProvider theme={extendTheme(theme)}>
            <Container
                py={8}
                px={0}
                maxW={{
                base: "100%",
                sm: "35rem",
                md: "43.75rem",
                lg: "57.5rem",
                xl: "75rem",
                xxl: "87.5rem"
                }}
            >
                <ChakraCarousel gap={32}>
                {data.slice(1, 10).map((post, index) => (
                    <Flex
                    key={index}
                    boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    justifyContent="space-between"
                    flexDirection="column"
                    overflow="hidden"
                    color="gray.300"
                    bg="base.d100"
                    rounded={5}
                    flex={1}
                    p={5}
                    >
                    <VStack mb={6}>
                        <Heading
                        fontSize={{ base: "xl", md: "2xl" }}
                        textAlign="left"
                        w="full"
                        mb={2}
                        >
                        {capsFirst(post.title)}
                        </Heading>
                        <Text w="full">{capsFirst(post.body)}</Text>
                    </VStack>
        
                    <Flex justifyContent="space-between">
                        <HStack spacing={2}>
                        <Tag size="sm" variant="outline" colorScheme="cyan">
                            Post: {post.id - 1}
                        </Tag>
                        </HStack>
                        <Button
                        //   onClick={() => alert(`Post ${post.id - 5} clicked`)}
                        colorScheme="green"
                        fontWeight="bold"
                        color="gray.900"
                        size="sm"
                        >
                        More
                        </Button>
                    </Flex>
                    </Flex>
                ))}
                </ChakraCarousel>
            </Container>
            </ChakraProvider>
        </Box>
    );
}
export default SwiperControls
  