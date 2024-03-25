import React, { useState } from "react";
import { Box, VStack, HStack, Heading, Text, Button, Image, useColorModeValue, SimpleGrid, Flex, Spacer } from "@chakra-ui/react";
import { FaCoins, FaPlay } from "react-icons/fa";

const SlotMachine = ({ name, image }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 2000);
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md" bg={useColorModeValue("white", "gray.700")}>
      <VStack spacing={4}>
        <Image src={`https://images.unsplash.com/photo-1575936123452-b67c3203c357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0JpbWFnZSU3RHxlbnwwfHx8fDE3MTEzNzYwODB8MA&ixlib=rb-4.0.3&q=80&w=1080`} alt={name} w="200px" h="200px" objectFit="cover" animation={isSpinning ? "spin 1s linear infinite" : "none"} />
        <Heading size="md">{name}</Heading>
        <Button leftIcon={<FaPlay />} colorScheme="blue" onClick={handleSpin} isLoading={isSpinning}>
          Spin
        </Button>
      </VStack>
    </Box>
  );
};

const Index = () => {
  return (
    <Box>
      <Flex align="center" p={4} bg="purple.500" color="white" boxShadow="md">
        <Heading size="xl" mr={4}>
          <FaCoins /> Online Slots
        </Heading>
        <Spacer />
        <Text>Your Balance: $1000</Text>
      </Flex>

      <Box p={8}>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          <SlotMachine name="Lucky 7" image="slot machine lucky 7" />
          <SlotMachine name="Mega Fortune" image="slot machine mega fortune" />
          <SlotMachine name="Book of Ra" image="slot machine book of ra" />
          <SlotMachine name="Starburst" image="slot machine starburst" />
          <SlotMachine name="Gonzo's Quest" image="slot machine gonzos quest" />
          <SlotMachine name="Cleopatra" image="slot machine cleopatra" />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;
