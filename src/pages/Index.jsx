import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Snapme</Heading>
        <Text fontSize="xl">Your ultimate screenshot tool</Text>
        <Button as={RouterLink} to="/about" colorScheme="teal" size="lg">Learn More</Button>
      </VStack>
    </Container>
  );
};

export default Index;