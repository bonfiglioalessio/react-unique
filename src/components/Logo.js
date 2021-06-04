import React from "react";
import { Image, useColorMode } from "@chakra-ui/react";

import logoDark from '../assets/logo_dark.png';
import logoLight from '../assets/logo.png';

export default function Logo() {
  const { colorMode } = useColorMode()
  
  return (
        <Image loading="lazy" alt={'Logo'} src={colorMode === "light" ? logoDark : logoLight} htmlWidth="120px" htmlHeight="40px" />
  );
}