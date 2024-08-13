import { Box, Flex , Text, Img, Button, useColorModeValue} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { colors } from "../../themes/themes"

const Hero = () => {

    const bg = useColorModeValue(colors.b, colors.vg)
    const color = useColorModeValue(colors.n, colors.b)

    return(
        <>
        <Flex as='section' alignItems={"center"} justifyContent={"center"} p={0} flexDirection={['column',null,null,'row']} id="hero" mt={"30px"}>
            <Flex className="hero-1" w={['90%',null,null,'50%']} p={['0',null,null,'0 0 0 50px']} textAlign={"left"} flexDirection={"column"}>

                <Flex className="tittle1">
                    <Text as={"h3"} color={color}>Hola! <Text as={"span"}>Mi nombre es</Text></Text>
                </Flex>

                <Flex className="tittle2">
                    <Text as={"h2"} fontFamily="Helvetica" style={{ WebkitTextStroke: '2px #000' }} fontSize={"3.5em"} fontWeight={"700"} color={"white"} textShadow={"3px 3px 1px #b1b1b1, 0 0 0px black, 0 0 0px black"}><Text as={"span"}>Leandro</Text> Rojano</Text>
                </Flex>

                <Flex className="tittle3" flexDirection={"column"}>
                    <Text as={"h1"} fontSize={"2em"} mt={"-5px"} fontFamily={"caveat"} color={color}>Front-End Developer</Text>
                    <Img src="/img/sub.png" w={"230px"} mt={"-30px"}></Img>
                </Flex>

                <Flex className="tittle4">
                    <Text as={"h4"} color={color} fontWeight={"bold"} pt={"20px"}>¿Alguna idea en mente? Yo la desarrollo.</Text>
                </Flex>

                <Flex className="tittle5">
                    <Text as={"p"} mt={"10px"} color={color} fontSize={"0.8em"} fontWeight={"500"}>Soy un desarrollador de software enfocado en la creación de experiencias digitales impactantes. Mi enfoque principal está en el desarrollo Web, con habilidades en diseño UI/UX y desarrollo de Apps. 😁</Text>
                </Flex>

                <Flex className="tittle6" gap={"20px"} mt={"20px"}>
                    <Text as={"a"} color={color} href="https://www.github.com/leoito88" fontSize={"2.2rem"}><i class="fa-brands fa-github"></i></Text>

                    <Text as={"a"} color={color} href="https://wa.me/+5493813150489" fontSize={"2.2rem"}><i class="fa-brands fa-whatsapp"></i></Text>

                    <Text as={"a"} color={color} href="http://www.linkedin.com/in/leandro-rojano" fontSize={"2.2rem"}><i class="fa-brands fa-linkedin"></i></Text>
                </Flex>
                    <Flex className="contBut" alignItems={"center"} mt={"20px"}>
                        <Button as={"a"} href="/img/CV-ROJANO.pdf"  p={"10px 20px"} fontSize={"16px"} color={"white"} backgroundImage={"linear-gradient(150deg, var(--main-color), var(--hl-color))"} border={"none"} borderRadius={"20px"} boxShadow={"0 0 0 1px white, 0 0 0 3px black, 5px 5px 1px #b1b1b1"} outline={"none"} transition={"all 1s ease"} _hover={{ transform: "scale(1.1)" , boxShadow: "0 0 0 1px white, 0 0 0 3px black, 8px 8px 2px #b1b1b1b5"}} >Descargar CV</Button><Flex as={"div"} bg={"black"} w={"50px"} h={"2px"}></Flex><Text as={"span"} ml={"3px"} fontWeight={"600"} fontSize={"0.8em"} letterSpacing={"-0.05em"}>Habilidades</Text>
                    </Flex>
            </Flex>

            <Flex className="hero-2" w={"50%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} mt={['50px',null,null,'0px']}>
                <Flex className="bg" w={['200px',null,null,'400px']} h={['200px',null,null,'400px']} borderRadius={"50%"} overflow={"hidden"} border={"none"} bgGradient='linear(to-tl, #155445, #28a587)'>
                <Box
    as={motion.div}
    animate={{ opacity: 1, translateY: '0px', scale: 1 }} // Cambia el valor de scale aquí
    initial={{ opacity: 0, translateY: '100px', scale: 0.8 }}
    transition={{ duration: 12000, ease: 'easeInOut' }}
    backgroundImage="url('/img/yo.png')"
    backgroundPosition="center"
    backgroundSize={['cover', null, null, 'cover']}
    backgroundRepeat="no-repeat"
    width="100%"
    height="100%"
    borderRadius="50%"
    display="block"
    margin="0 auto"
>
</Box>
                </Flex>

                <Flex className="pop pop1" mt={['0px',null,null,'-100px']} h={"100%"} position={"relative"} right={['60px',null,null,'130px']} p={"5px 20px"} fontSize={"1rem"} color={color} backgroundColor={bg} border={"none"} borderRadius={"35px"} boxShadow={"0 0 0 3px black, 6px 6px 0px #b1b1b1a1"} alignItems={"center"} justifyContent={"space-between"}>
                    <Flex className="pop-cont-num" m={"0"} p={"0"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"0"} fontSize={"2em"}>
                        <Text as={"h4"} m={"0"} p={"0"} fontSize={"1.5rem"}>3<Text as={"span"}>+</Text></Text>
                    </Flex>
                    <Flex className="pop-cont-text" m={"0 5px"} padding={"0"} textAlign={"left"}>
                        <Flex as={"h5"} m={"5px"} p={"0"} flexDirection={"column"} justifyContent={"left"} fontSize={"0.6em"} fontWeight={"500"} flexWrap={"1"}>Años de <Text as={"span"} m={"0 5px 0 0"} p={"0"} color={"var(--hl-color)"}>Experiencia</Text></Flex>
                    </Flex>
                </Flex>

                <Flex className="pop pop2" mt={"-20px"} h={"100%"} position={"relative"} right={['-70px',null,null,'-130px']} p={"5px 20px"} fontSize={"1rem"} color={color} backgroundColor={bg} border={"none"} borderRadius={"35px"} boxShadow={"0 0 0 3px black, 6px 6px 0px #b1b1b1a1"} alignItems={"center"} justifyContent={"space-between"}>
                    <Flex className="pop-cont-num" m={"0"} p={"0"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"0"} fontSize={"2em"}>
                        <Text as={"h4"} m={"0"} p={"0"} fontSize={"1.5rem"}>8</Text>
                    </Flex>
                    <Flex className="pop-cont-text" m={"0 5px"} padding={"0"} textAlign={"left"}>
                        <Flex as={"h5"} m={"5px"} p={"0"} flexDirection={"column"} justifyContent={"left"} fontSize={"0.6em"} fontWeight={"500"} flexWrap={"1"}><Text as={"span"} m={"0 5px 0 0"} p={"0"} color={"var(--hl-color)"}>Proyectos</Text>  Completados</Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>        
        </>
    )
}

export default Hero