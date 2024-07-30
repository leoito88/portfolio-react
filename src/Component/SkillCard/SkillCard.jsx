import { Flex, Text, Progress, Box, useColorModeValue  } from '@chakra-ui/react'
import { colors } from '../../themes/themes';

const SkillCard = ({ title, description, porcentaje, icon }) => {
  
  const bg = useColorModeValue(colors.crb, colors.vg)
  const color = useColorModeValue(colors.n, colors.b)
  
  return (
      <Flex 
      position="relative"
      flexDirection={"column"} 
      flexBasis={"25%"} 
      padding={15} 
      textAlign={'left'} 
      bg={bg} 
      borderRadius={10} 
      h={"220px"} 
      color={color}
      border={"1px solid #ddd"}
      boxShadow='s'
      minW={"200px"}
      _hover={{ bg: {bg}, transform: 'scale(1.05)', boxShadow:'xl' }}
      transition="all 0.3s, transform 0.3s">

        <Flex flexDirection={'row'} flexWrap={"nowrap"} justifyContent={'space-between'}  alignItems='center' gap='2'>
        <i className={`fas ${icon}`}/><Text fontSize='1.1em' as='b' flexWrap={"nowrap"}> {title}</Text>
        <Text fontSize='1em' as={"b"}>{porcentaje}<Text as={"span"} fontSize={"0.8em"}>%</Text></Text>
        </Flex>
        
        <Text fontSize='0.75em' fontWeight={"500"} as={"p"}>{description}</Text>
        <Box position="absolute" bottom="5" w={"calc(100% - 4vh)"}>
          <Progress colorScheme='green' size='xs' value={porcentaje} borderRadius={5} />
        </Box>
      </Flex>
  );
};

export default SkillCard;