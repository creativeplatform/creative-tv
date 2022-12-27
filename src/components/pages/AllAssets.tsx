import { useRouter } from 'next/router'
import React, { ReactNode, useState, useEffect } from "react";
import { 
    Card, CardHeader, CardBody, CardFooter, Image, 
    Stack, Heading, Text, Divider, ButtonGroup, 
    Button, Container, Breadcrumb, Box, BreadcrumbLink, 
    Flex, BreadcrumbItem, SimpleGrid, AspectRatio, Badge } 
from '@chakra-ui/react'
  import axios from 'axios'
  interface HeaderProps {
    children: ReactNode
  }
  
  const AllAssets = ({ children }: HeaderProps): JSX.Element => {
      const router = useRouter()
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
            console.log('Error is ',error)
        }
    }, []);

    // For Local
    // useEffect(() => {
    //     fetch("/api/all-assets")
    //       .then((res) => res.json())
    //       .then((res) => setData(JSON.parse(res.data)));
    //   }, []);

    return (
        <Box>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => router.push('/')}>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage className="active-crumb">
                    <BreadcrumbLink href='#'>All Assets</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
            {data.slice(0, data.length).map((post, index) => (
                <Card key={post.id}>
                    <CardBody>
                    <AspectRatio maxW='560px' ratio={1}>
                        <iframe
                            title='naruto'
                            src={ post.downloadUrl }
                            allowFullScreen
                        />
                    </AspectRatio>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{ post.name }</Heading>
                        </Stack>
                        {post.status.phase == 'ready' ?
                            <Badge colorScheme='green'>{ post.status.phase }</Badge>
                        :
                            <Badge colorScheme='red'>{ post.status.phase }</Badge>
                        }
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                        {post?.status?.phase === 'ready' &&
                            post?.storage?.status?.phase !== 'ready' ?
                            <Button onClick={() => router.push(`/pages/mint-nft-video?assetId=${post.id}`)} className='card-mint-button'>
                                Update Asset
                            </Button>
                        :
                            <Button disabled className='card-mint-button'>
                                Update Asset
                            </Button>
                        }
                            {post.status.phase == 'ready' ?
                                <Button onClick={() => router.push(`/pages/mint-nft-video?assetId=${post.id}`)} className='card-mint-button'>
                                    Mint NFT Now
                                </Button>
                            :
                                <Button disabled className='card-mint-button'>
                                    Mint NFT Now
                                </Button>
                            }
                            
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            ))}
            </SimpleGrid>
        </Box>
    );
}
export default AllAssets