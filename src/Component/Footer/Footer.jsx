import { Box, Flex , Text, Img, Button, useColorModeValue } from "@chakra-ui/react"
import { colors } from "../../themes/themes"
import { Reveal } from "../Reveal/Reveal"

const Footer = () => {

    const bg = useColorModeValue(colors.b, colors.vg)
    const color = useColorModeValue(colors.n, colors.b)
    return(
        <>
        {/* <Reveal> */}
        <Flex className="foot" p={"0"} alignItems={"center"} justifyContent={["center","space-between"]} m={['20px',null,null,'20px 50px']}>
            <Reveal>
            <Flex className="foot1" gap={"28px"} m={"0"} textAlign={"center"} flexWrap={"1"} justifyContent={"center"} alignItems={"center"} p={"0"}>
                <Text as={"a"} transition={"all 0.3s"} color={color} href="https://www.github.com/leoito88" fontSize={"2.2rem"}><i class="fa-brands fa-github"></i></Text>

                <Text as={"a"} transition={"all 0.3s"} color={color} href="https://wa.me/+5493813150489" fontSize={"2.2rem"}><i class="fa-brands fa-whatsapp"></i></Text>

                <Text as={"a"} transition={"all 0.3s"} color={color} href="http://www.linkedin.com/in/leandro-rojano" fontSize={"2.2rem"}><i class="fa-brands fa-linkedin"></i></Text>
            </Flex>
            </Reveal>

            <Reveal>
            <Flex className="foot2" h={"30px"} m={"0"} textAlign={"center"} flexWrap={"1"} justifyContent={"center"} alignItems={"center"} p={"0"} display={["none","none","flex","flex"]}>
                <Text as={"h4"} color={color}>©2024</Text>
            </Flex>
            </Reveal>

            
            <Flex className="foot3" flexDirection={"column"} display={["none","flex","flex","flex"]} w={"150px"} h={"50px"} m={"0"} textAlign={"center"} flexWrap={"1"} justifyContent={"center"} alignItems={"center"} p={"0"}>
            <Reveal>
                <Text as={"h4"} color={color}>Diseñado por</Text> 
            </Reveal>
            <Reveal>
                <Text as={"span"}>Leandro Rojano</Text>
            </Reveal>
            </Flex>
            
        </Flex>
        {/* </Reveal> */}
        </>
    )
}

export default Footer