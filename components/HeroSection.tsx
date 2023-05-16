import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function HeroSection() {
    return (
      <Flex
        w={'full'}
        h={'500px'}
        backgroundImage={
          'url(https://d3go.com/wp-content/uploads/2015/10/Website-Banner-MTG-Puzzle-Quest-1920x640.jpg)'
        }
        backgroundSize={'contain'}
        backgroundPosition={'center center'}
        bgRepeat={'no-repeat'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>

            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              PRAISE YOUR PROXY
            </Text>
          </Stack>
        </VStack>
      </Flex>
      
    );
  }