import React, { useState, useEffect, ReactNode } from "react";
import { capsFirst } from "../../utils";
import { useRouter } from 'next/router'
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
    Tag,
    Box,
    Card, CardBody, CardFooter,
    Stack, Divider, ButtonGroup, AspectRatio, Badge
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import ChakraCarousel from "../../hooks/ChakraCarousel";

interface HeaderProps {
    children: ReactNode
}

const SwiperControls = ({ children }: HeaderProps): JSX.Element => {
    const router = useRouter();
    const [data, setData] = useState<any[]>([]);

    // For Live
    useEffect(() => {
        try {
            fetch("https://livepeer.studio/api/asset",
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STUDIO_API_KEY}`,
                        Accept: 'application/json',
                    }
                }
            )
                .then((res) => res.json())
                .then((res) => setData(res));
        } catch (error) {
            console.log('Error: ', error)
        }
    }, []);

    // For Local
    // useEffect(() => {
    //     fetch("/api/swiper-data")
    //         .then((res) => res.json())
    //         .then((res) => setData(JSON.parse(res.data)));
    // }, []);

    return (
        <Box>
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
                        {data.map((post, index) => (
                            <Card key={post.id}>
                                <CardBody>
                                    <AspectRatio maxW='560px' ratio={1}>
                                        <iframe
                                            title='naruto'
                                            src={post.downloadUrl}
                                            allowFullScreen
                                        />
                                    </AspectRatio>
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{post.name}</Heading>
                                    </Stack>
                                    {post.status.phase == 'ready' ?
                                        <Badge colorScheme='green'>{post.status.phase}</Badge>
                                        :
                                        <Badge colorScheme='red'>{post.status.phase}</Badge>
                                    }
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2' className='assets-btn-group'>
                                        {post?.status?.phase === 'ready' &&
                                            post?.storage?.status?.phase !== 'ready' ?
                                            <Button onClick={() => router.push(`/pages/mint-nft-video?assetId=${post.id}`)} className='card-mint-button'
                                                as={motion.div} _hover={{ transform: "scale(1.1)" }}>
                                                Update Asset
                                            </Button>
                                            :
                                            <Button disabled className='card-mint-button'>
                                                Update Asset
                                            </Button>
                                        }
                                        {post.status.phase == 'ready' ?
                                            <Button onClick={() => router.push(`/pages/mint-nft-video?assetId=${post.id}`)} className='card-mint-button'
                                                as={motion.div} _hover={{ transform: "scale(1.1)" }}>
                                                Mint NFT
                                            </Button>
                                            :
                                            <Button disabled className='card-mint-button'>
                                                Mint NFT
                                            </Button>
                                        }
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        ))}
                    </ChakraCarousel>
                </Container>
            </ChakraProvider>
        </Box>
    );
}
export default SwiperControls
