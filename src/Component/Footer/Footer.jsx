import { Box, Flex , Text, Img, Button, useColorModeValue } from "@chakra-ui/react"
import { colors } from "../../themes/themes"

const Footer = () => {

    const bg = useColorModeValue(colors.b, colors.vg)
    const color = useColorModeValue(colors.n, colors.b)
    return(
        <>
        <Flex className="foot" p={"0"} alignItems={"center"} justifyContent={"space-between"} m={['20px',null,null,'20px 50px']}>
            <Flex className="foot1" gap={"28px"} m={"0"} textAlign={"center"} flexWrap={"1"} justifyContent={"center"} alignItems={"center"} p={"0"}>
                <Text as={"a"} color={color} href="https://www.github.com/leoito88" fontSize={"2.2rem"}><i class="fa-brands fa-github"></i></Text>

                <Text as={"a"} color={color} href="https://wa.me/+5493813150489" fontSize={"2.2rem"}><i class="fa-brands fa-whatsapp"></i></Text>

                <Text as={"a"} color={color} href="http://www.linkedin.com/in/leandro-rojano" fontSize={"2.2rem"}><i class="fa-brands fa-linkedin"></i></Text>
            </Flex>

            <Flex className="foot2" h={"30px"} m={"0"} textAlign={"center"} flexWrap={"1"} justifyContent={"center"} alignItems={"center"} p={"0"}>
                <Text as={"h4"}>©2024</Text>
            </Flex>

            <Flex className="foot3" w={"150px"} h={"30px"} m={"0"} textAlign={"center"} flexWrap={"1"} justifyContent={"center"} alignItems={"center"} p={"0"}>
                <Text as={"h4"}>Diseñado por <Text as={"span"}>Leandro Rojano</Text></Text>
            </Flex>
        </Flex>
        </>
    )
}

export default Footer