import "./Hero.css"
import { Box, Flex , Text, Img } from "@chakra-ui/react"

const Hero = () => {
    return(
        <>
        <Flex as='section' alignItems={"center"} justifyContent={"center"} p={0}>
            <Flex className="hero-1" w={"50%"} p={"0 0 0 50px"} textAlign={"left"} flexDirection={"column"}>

                <Flex className="tittle1">
                    <Text as={"h3"}>Hola! <Text as={"span"}>Mi nombre es</Text></Text>
                </Flex>

                <Flex className="tittle2">
                    <Text as={"h2"}><Text as={"span"}>Leandro</Text> Rojano</Text>
                </Flex>

                <Flex className="tittle3" flexDirection={"column"}>
                    <Text as={"h1"}>Front-End Developer</Text>
                    <Img src="../public/img/sub.png"></Img>
                </Flex>

                <Flex className="tittle4">
                    <Text as={"h4"}>¿Alguna idea en mente? Yo la desarrollo.</Text>
                </Flex>

                <Flex className="tittle5">
                    <Text as={"p"}>Soy un desarrollador de software enfocado en la creación de experiencias digitales impactantes. Mi enfoque principal está en el desarrollo Web, con habilidades en diseño UI/UX y desarrollo de Apps. 😁</Text>
                </Flex>

                <Flex className="tittle6" gap={"20px"}>
                    <Text as={"a"} href="https://www.github.com/leoito88" fontSize={"2.2rem"}><i class="fa-brands fa-github"></i></Text>

                    <Text as={"a"} href="https://wa.me/+5493813150489" fontSize={"2.2rem"}><i class="fa-brands fa-whatsapp"></i></Text>

                    <Text as={"a"} href="http://www.linkedin.com/in/leandro-rojano" fontSize={"2.2rem"}><i class="fa-brands fa-linkedin"></i></Text>
                </Flex>
            </Flex>
        </Flex>

        <section class="hero" id="hero">
        <div class="hero-1">
            <div class="tittle1">
                <h3>Hola! <span>Mi nombre es</span></h3>
            </div>
            <div class="tittle2">
                <h2><span >Leandro</span> Rojano</h2>
            </div>
            <div class="tittle3">
                <h1>Front-End Developer</h1>
                <img src="img/sub.png" alt=""></img>
            </div>
            <div class="tittle4">
                <h4>¿Alguna idea en mente? Yo la desarrollo.</h4>
            </div>
            <div class="tittle5">
                <p>Soy un desarrollador de software enfocado en la creación de experiencias digitales impactantes. Mi enfoque principal está en el desarrollo Web, con habilidades en diseño UI/UX y desarrollo de Apps. 😁</p>
            </div>
            <div class="tittle6">
                <a href="https://www.github.com/leoito88"><i class="fa-brands fa-github"></i></a>
                <a href="https://wa.me/+5493813150489"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="http://www.instagram.com/leoito88"><i class="fa-brands fa-instagram"></i></a>
                <div class="contbut">
                    <a href="img/CV-ROJANO.pdf" class="gradient-button">Descargar CV</a><div class="barra"></div> <span class="skil">Habilidades</span>
                </div>
            </div>
        </div>

        <div class="hero-2">
            <div class="bg">
             <div class="ph">
             </div>
             
             </div>
             <div class="pop pop1">
                <div class="pop-cont-num">
                <h4>3<span>+</span></h4>
                </div>
                <div class="pop-cont-text">
                <h5>Años de<span>Experiencia</span></h5>
                </div>
             </div>
             <div class="pop pop2">
                <div class="pop-cont-num">
                    <h4>8</h4>
                    </div>
                    <div class="pop-cont-text">
                    <h5><span>Proyectos</span> Completados</h5>
                    </div>
            </div>

        </div>
    </section>
        
        </>
    )
}

export default Hero