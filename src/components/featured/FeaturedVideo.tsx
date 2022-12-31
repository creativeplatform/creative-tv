import { Player } from '@livepeer/react';
import Image from 'next/image';
import * as React from 'react';
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

// const PosterImage = () => {
//     return (
//       <Image
//         src={waterfallsPoster}
//         layout="fill"
//         objectFit="cover"
//         priority
//         placeholder="blur"
//       />
//     );
//   };

  const playbackId =
  'bafybeiemsllhtqxoooa6pna35dtydyjkpdl6p34s4klwcafnw2qr3fvytq';

const FeaturedVideo = () => {
  return (
    <Box>
    <Stack
      p={{ base: 5, md: 10 }}
      direction={{ base: 'column', md: 'row' }}
      backgroundSize="850px"
      backgroundPosition="center left"
      backgroundRepeat="no-repeat"
      minH={{ base: 'unset', md: '450px' }}
    >
      <Player
      title="Creative Introduction"
      playbackId={playbackId}
      loop
      autoPlay
      showTitle={false}
      muted
    //   poster={<PosterImage />}
    />
      <Stack
        pos="relative"
        zIndex={1}
        direction="column"
        justifyContent="center"
        spacing={10}
        maxW="xl"
      >
        <div className="about_secondary">
                        <div className="about_secondary-row h1">
                            Strike. <span className="highlight aos-init aos-animate" data-aos="fade-left">Watch.</span> Brand. Challenge.
                        </div>
                        <div className="about_secondary-row h1">
                            Brand.
                            <span className="highlight highlight--purple aos-init aos-animate" data-aos="fade-left" data-aos-delay="50"> Stream.</span> Create.
                            Inspire. Dream.
                        </div>
                        <div className="about_secondary-row h1">
                            Stream. <span className="highlight aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">Create.</span> Stars. Watch. Reinvent.
                        </div>
                    </div>
      </Stack>
    </Stack>
    </Box>
  );
};

export default FeaturedVideo;