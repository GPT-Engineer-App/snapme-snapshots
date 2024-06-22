import { Box, Flex, Link, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => (
  <Box bg="teal.500" px={4}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }} color="white">
          Home
        </Link>
        <Link as={RouterLink} to="/about" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }} color="white">
          About
        </Link>
        <Link as={RouterLink} to="/contact" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }} color="white">
          Contact
        </Link>
      </Box>
    </Flex>
  </Box>
);

export default Navbar;