import {
    AspectRatio,
    Box,
    BoxProps,
    Container,
    forwardRef,
    Heading,
    Input,
    Stack,
    Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon
  } from "@chakra-ui/react";
  import { motion, useAnimation } from "framer-motion";
  import { useRouter } from 'next/router'
  import React, { ReactNode } from 'react'

  const PreviewImage = forwardRef<BoxProps, typeof Box>((props, ref) => {
    return (
      <Box
        bg="white"
        top="0"
        height="100%"
        width="100%"
        position="absolute"
        borderWidth="1px"
        borderStyle="solid"
        rounded="sm"
        borderColor="gray.400"
        as={motion.div}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
        {...props}
        ref={ref}
      />
    );
  });
  
  interface HeaderProps {
    children: ReactNode
  }

  const UploadVideoAsset = ({ children }: HeaderProps): JSX.Element => {
    const controls = useAnimation();
    const startAnimation = () => controls.start("hover");
    const stopAnimation = () => controls.stop();
    const router = useRouter()
    return (
        <Box>
            <Breadcrumb
                    spacing="8px"
                    separator={<Icon color="gray.300" name="chevron-right" />}
                >
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => router.push('/')}>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Upload Video Assets</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Container my="12">
                <AspectRatio width="64" ratio={1}>
                <Box
                    borderColor="gray.300"
                    borderStyle="dashed"
                    borderWidth="2px"
                    rounded="md"
                    shadow="sm"
                    role="group"
                    transition="all 150ms ease-in-out"
                    _hover={{
                    shadow: "md"
                    }}
                    as={motion.div}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                >
                    <Box position="relative" height="100%" width="100%">
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        height="100%"
                        width="100%"
                        display="flex"
                        flexDirection="column"
                    >
                        <Stack
                        height="100%"
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justify="center"
                        spacing="4"
                        >
                        <Stack p="8" textAlign="center" spacing="1">
                            <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                            Drop files here
                            </Heading>
                            <Text fontWeight="light">or click to upload</Text>
                        </Stack>
                        </Stack>
                    </Box>
                    <Input
                        type="file"
                        height="100%"
                        width="100%"
                        position="absolute"
                        top="0"
                        left="0"
                        opacity="0"
                        aria-hidden="true"
                        accept="image/*"
                        onDragEnter={startAnimation}
                        onDragLeave={stopAnimation}
                    />
                    </Box>
                </Box>
                </AspectRatio>
            </Container>
        </Box>
    );
}
export default UploadVideoAsset
  