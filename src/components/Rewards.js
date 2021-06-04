import {
    Box,
    Text,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Container
  } from '@chakra-ui/react';
  import { BsPerson } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  
  const StatsCard = ({title, stat, icon}) => {
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.200', 'gray.600')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  const Rewards = () => {
    return (
      <Container my={{base: "10", lg: "20"}} maxW="7xl" mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
        <Text
          textAlign={'center'}
          fontSize={'2xl'}
          fontWeight={'bold'}
          pb={10}
          >
          Our company is expanding, you could be too.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <StatsCard
            title={'Users'}
            stat={'5,000'}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Servers'}
            stat={'1,000'}
            icon={<FiServer size={'3em'} />}
          />
          <StatsCard
            title={'Datacenters'}
            stat={'7'}
            icon={<GoLocation size={'3em'} />}
          />
        </SimpleGrid>
      </Container>
    );
  }

  export {Rewards};