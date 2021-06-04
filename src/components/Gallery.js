import { Stack, Image } from '@chakra-ui/react';

const Gallery = () => {
  return (
    <Stack direction="row" overflow="scroll" my={{ base: "50", md: "10", lg: "0" }}>
        <Image
          src={'https://source.unsplash.com/random'}
          loading="lazy"
          alt="Segun Adebayo"
          width={{ base: "640px", lg: "1280px" }} height={{ base: "360px", lg: "720px" }} 
          htmlWidth="640" htmlHeight="360"
        />
        <Image
          src={'https://source.unsplash.com/daily'}
          loading="lazy"
          boxShadow={'2xl'}
          alt="Dan Abramov"
          width={{ base: "640px", lg: "1280px" }} height={{ base: "360px", lg: "720px" }}
          htmlWidth="640" htmlHeight="360"
        />
        <Image
          src={'https://source.unsplash.com/weekly'}
          loading="lazy"
          boxShadow={'2xl'}
          alt="Dan Abramov"
          width={{ base: "640px", lg: "1280px" }} height={{ base: "360px", lg: "720px" }}
          htmlWidth="640" htmlHeight="360"
        />
    </Stack>
  );
};

export { Gallery };
