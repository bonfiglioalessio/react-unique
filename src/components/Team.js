import {
  Heading,
  Avatar,
  Box,
  Text,
  Link,
  useColorModeValue,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';

const Person = ({title, description}) => {
    return (
        <Box
        mx="auto"
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Avatar
          size={'xl'}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {title}
        </Heading>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.600', 'gray.300')}
          px={3}
          py={2}
        >
          {description}
        </Text>
      </Box>
    );
  };

const Team = () => {
  return (
    <Container p={4} maxW={'3xl'} my={{ base: '10', lg: '20' }}>
        <Text
          textAlign={'center'}
          fontSize={'2xl'}
          fontWeight={'bold'}
          pb={10}
          >
          Il team
        </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Person title="Simone Bonfiglio" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, beatae? Molestias ipsum repellendus sunt a odio praesentium laudantium debitis nihil sed, dolorum adipisci numquam nulla animi ea quo quod mollitia."/>
        <Person title="Carolina Bonfiglio" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, beatae? Molestias ipsum repellendus sunt a odio praesentium laudantium debitis nihil sed, dolorum adipisci numquam nulla animi ea quo quod mollitia."/>
      </SimpleGrid>
    </Container>
    
  );
};

export { Team };
