import { Flex, Text, Box , useColorModeValue} from '@chakra-ui/react';
import { colors } from '../../themes/themes';

const Card = ({ title, description, description2 }) => {
    const bg = useColorModeValue(colors.crb, colors.vg)
    const color = useColorModeValue(colors.n, colors.b)
  return (
    <Flex
        position={"relative"}
        flexDirection="column"
        flexBasis="25%"
        padding={4}
        textAlign="left"
        bg={bg}
        color={color}
        borderRadius={10}
        h="100%"
        boxShadow="s"
        minW="300px"
        border= "1px solid #ddd"
        _hover={{ 
            bgGradient: 'linear(to-br, var(--main-color), var(--hl-color))',
            transform: 'scale(1.05)', 
            boxShadow: 'xl', 
            color: '#fff',
            border: "1px solid black" }}
        transition="all 0.3s, transform 0.3s"
    >
      <Text fontSize="1em" as="b">
        {title}
      </Text>
      <Text fontSize="0.75em" fontWeight="500" as="p" pt={"3"}>
        {description}
      </Text>
      <Text fontSize="0.75em" fontWeight="500" as="p" pt={"3"}>
        {description2}
      </Text>
    </Flex>
  );
};

export default Card;