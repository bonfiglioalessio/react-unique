import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    useColorModeValue
  } from '@chakra-ui/react';
  import { ChatIcon } from '@chakra-ui/icons'
  
  function Hero() {
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 0, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '4xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'green.500',
                  zIndex: -1,
                }}>
                Unici, Forti,
              </Text>
              <br />
              <Text as={'span'} color={'green.500'}>
                ed emozionali!
              </Text>
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>
            Cerchiamo di portare un’aria di freschezza, gioventù e novità nella fotografia di matrimonio, divertendoci insieme a voi speriamo di raccontare il vostro giorno più bello in modo unico.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'md'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                color={useColorModeValue('gray.50', 'gray.900')}
                bg={useColorModeValue('green.600', 'green.500')}
                _hover={{ bg: 'green.500' }}>
                Scopri di più
              </Button>
              <Button
                rounded={'md'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                leftIcon={<ChatIcon h={4} w={4} color={'gray.300'} />}>
                Contattaci
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              boxShadow={'2xl'}
              overflow={'hidden'}
              width="480px"
              >
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                loading="lazy"
                htmlWidth="640" htmlHeight="360"
                src={
                  'https://source.unsplash.com/user/erondu/640x360'
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }

  export {Hero};