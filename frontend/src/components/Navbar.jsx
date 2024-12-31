import React from 'react';
import { Container, Flex, Text ,HStack,Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaRegPlusSquare } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { useColorMode } from './ui/color-mode';
import { PiMoonStarsFill } from "react-icons/pi";

const Navbar = () => {
  const {toggleColorMode,colorMode}=useColorMode()
  return (
    <Container maxW={'1140px'} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
          base: 'column',  // Fixed 'bas' to 'base'
          sm: 'row'
        }}
        bg={'gray.800'}  // Added background color to ensure visibility of text
        p={4}  // Added padding for better spacing
      >
        <Text
        color={'red.500'}
          textTransform={'uppercase'}
          textAlign={'center'}
          bgGradient={'linear(to-l, #2ac8c0, #FF0080)'}
          bgClip={'text'}
          fontSize={{base:'22',sm:'28'}}
          fontWeight={'extrabold'}
        >
          <Link to={'/'}>Product Store</Link>
        </Text>

        <HStack spacing={2} alignItems={'center'}>
          <Link to={'/create'}>
          <Button><FaRegPlusSquare /></Button>
          </Link>
          
          <Button onClick={toggleColorMode}> {colorMode=='light' ?<MdWbSunny />:<PiMoonStarsFill />}</Button>
         
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
