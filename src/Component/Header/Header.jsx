import { useState, useEffect } from 'react';
import { Button, Box, Flex, IconButton, HStack } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, Text, useColorModeValue } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faList } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../themes/themes.js'
import {Link, Events} from 'react-scroll'
import { DarkModeSwitch } from '../DarkModeSwitch/DarkModeSwitch';
import { motion } from "framer-motion";


const Header=()=>{

    const bg = useColorModeValue(colors.vb, colors.vn)
    const color = useColorModeValue(colors.n, colors.b)

    const marginLinks= '10px';
    const fS1 = [null,null,'10px', '12px','18px'] //fontSize
    const fW1 = 600 //fontWeight

    // Propiedades React-scroll
    const smooth="easeInOutQuint"
    const duration=1000
    const offset=-140

    // Funciones del menu
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuClick = ()=> {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = (section) => {
        setIsOpen(false);
        setTimeout(() => {
          scroller.scrollTo(section, {
            smooth,
            duration,
            offset,
          });
        }, 100); // Retraso de 100ms para cerrar el menú antes del desplazamiento
      };
    
      useEffect(() => {
        return () => {
          Events.scrollEvent.remove('end');
        };
      }, []);

    // Funciones Animación de Links
    const DURATION = 0.25;
    const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      style={{
        position: "relative",
        display: "block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textTransform: "uppercase",
        lineHeight: 1,
        letterSpacing: "0em",
      }}
    >

      {/* Link de arriba */}
      <Link to={href} smooth={"easeInOutQuint"} duration={1000} offset={-140} _hover={{ textDecoration: "none"}} inset={0}>
        <Flex>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              style={{ display: "inline-block",
                textDecoration:"none",
                fontSize:{fS1},
                fontWeight:"900",
                letterSpacing: "0em",
                textAlign:"right",
                justifyContent:"right"
              }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </Flex>

        {/* Link de abajo */}
        <Flex position="absolute" inset={0}>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              style={{ display: "inline-block",
                textDecoration:"none",
                fontSize:{fS1},
                fontWeight:"900",
                letterSpacing: "0em",
                textAlign:"right",
                justifyContent:"right"
               }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </Flex>
      </Link>
    </motion.div>
  );
};

    return(
        <Flex 
        as="header"
        w="100%"
        h="70px"
        borderRadius="10px"
        position="sticky"
        top={['10px',null,null,'50px']}
        margin="0 auto"
        padding={["0 25px",null,null,"0 60px 0 50px"]}
        zIndex="100"
        bg={bg}
        boxShadow="0 5px 32px rgba(0, 0, 0, 0.05)"
        backdropFilter="blur(10px)"
        border="solid 1px rgba(254, 254, 254, 0.2)"
        boxSizing="border-box"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
    >

            <Flex as='section' display={['none',null,null,'flex']}flexDirection='row' justifyContent='space-between' width='100%' >
                <Flex as='div' className="header-izq" alignItems="center" color={colors.color2} flexShrink='0'>
                    <Link to="hero" smooth={smooth} duration={duration} offset={offset}>
                        <Text as={("h2")} _hover={{textShadow: "0 0px 20px rgba(40, 165, 135, 1)" }} transition="text-shadow 0.3s ease-in-out"  fontWeight={"800"} color={color} fontSize={"1.5em"} fontFamily={"montserrat"}>LR<Text as={"span"} color={colors.v} fontSize={"1em"}>.</Text>Dev</Text>
                    </Link>
                </Flex>
                
                <Flex as='nav' alignItems='center' justifyContent='right' gap='10px' pr='10px'color={colors.color2} flex='1' style={{cursor: "pointer"}} >
                
                    <FlipLink href="services" color="red">Servicios</FlipLink>

                    <FlipLink href="skills">Habilidades</FlipLink>

                    <FlipLink href="portfolio">Portfolio</FlipLink>

                    <FlipLink href="testimonials">Testimonios</FlipLink>

                    <FlipLink href="prices">Precios</FlipLink>
                    
                    <Box as={FontAwesomeIcon} icon={faList} display='none'></Box>  
                </Flex>

                <Box className="div-boton" display="flex" alignItems='center' marginLeft='auto' >
                    <Link to="contact" smooth={smooth} duration={duration} offset={offset} >
                        <Button bg={colors.v} color={color} borderRadius='20px' fontSize={fS1} fontWeight={fW1} width={[null,null,null,'60px','140px','160px']}>Contacto</Button>
                    </Link>
                    <DarkModeSwitch />
                </Box>
            </Flex>

            <Box display={['flex',null,null,'none']} justifyContent={'space-between'} width='100%'>

            <Flex as={"div"} alignItems={'center'} className="logo">
                <Link to="hero" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('hero')}>
                <Text as={("h2", "b")} fontSize={"1.5em"} fontFamily={"montserrat"}>LR<Text as={"span"} color={"green"} fontSize={"1em"}>.</Text>Dev</Text>
                </Link>
            </Flex>

        
                {/* Menú Hamburguesa para tamaños de pantalla pequeñas */}
                <Menu position="absolute" top={4} right={4} isOpen={isOpen}>
                    <MenuButton as={IconButton} onClick={handleMenuClick} aria-label='Options'
                    icon={<FontAwesomeIcon icon={faBars} />}
                    variant='outline' borderColor={colors.vo} />
                    <MenuList bg={colors.vo} color={colors.b} fontSize={"2rem"}>
                        <MenuItem w={'98.1vw'} p={"1.5rem"}><Link to="services" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('services')} > .Servicios </Link>
                        </MenuItem>
                        <MenuItem p={"1.5rem"}> <Link to="skills" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('skills')} > .Habilidades </Link>
                        </MenuItem>
                        <MenuItem p={"1.5rem"}> <Link to="portfolio" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('portfolio')}> .Portfolio </Link>
                        </MenuItem>
                        <MenuItem p={"1.5rem"}> <Link to="servicios" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('testimonials')} > .Testimonios </Link>
                        </MenuItem>
                        <MenuItem p={"1.5rem"}> <Link to="testimonials" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('prices')}> .Precios </Link>
                        </MenuItem>
                        <MenuItem p={"1.5rem"}> <Link to="contacto" smooth={smooth} duration={duration} offset={offset} onClick={() => handleLinkClick('contact')} > .Contacto </Link>
                        </MenuItem>
                        <MenuItem><DarkModeSwitch /></MenuItem>
                    </MenuList>
                </Menu>
                </Box>
        </Flex>
    )
}

export default Header