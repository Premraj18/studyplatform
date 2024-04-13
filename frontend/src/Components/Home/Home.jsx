import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { CgGoogle, CgYoutube } from 'react-icons/cg'
import { SiCoursera, SiUdemy } from 'react-icons/si'
import { DiAws } from 'react-icons/di'

import vg from '../../assets/images/vg.png'
import introVideo from '../../assets/videos/bg-vid.mp4'

const Home = () => {
  return (
    <section className='home'>
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height={'100%'}
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '40']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
          >
            <Heading size={'2xl'} textAlign={['center', '']}>
              LEARN FROM THE EXPERTS
            </Heading>
            <Text>
              Find Valuable Content At Reasonable Price.
            </Text>
            <Link to='/courses'>
              <Button size={'lg'} colorScheme='yellow'>
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image className='vector-graphics' boxSize={'xs'} src={vg} objectFit={'contain'} />
        </Stack>
      </div>

      <Box padding={'8'} bg={'blackAlpha.800'}>
        <Heading textAlign={'center'} fontFamily={'body'} color={'yellow.400'}>
          OURS BRANDS
        </Heading>
        <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop={4}>
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video 
          src={introVideo}
          autoPlay
          controls
          controlsList='nodownload nofullscreen noremoteplayback'
          disablePictureInPicture
          disableRemotePlayback
        >

        </video>
      </div>

    </section>
  )
}

export default Home
