import "../Testimonios/Testimonios.css"
import { Flex, Box, Button, Textarea, Input, Text, useColorModeValue} from "@chakra-ui/react"
import { colors } from '../../themes/themes';

const Testimonios = () => {

    const bg = useColorModeValue(colors.b, colors.n)
    const color = useColorModeValue(colors.n, colors.b)

    return(
        <>
        <section class="testimonials" id="testimonials">
        <Text as={"h3"} fontSize={"1.6em"} color={color} fontWeight={"bold"}>Testimonios</Text>
        <Text as={"h4"} fontFamily={"caveat"} fontSize={"1.3rem"} fontWeight={"bold"}><Text as={"span"} fontFamily={"montserrat"} fontSize={"1rem"}>Lo que</Text> Dicen Mis Clientes</Text>

            <div class="container">
                <div class="card">
                    <div class="quote">
                        <i class="fa-solid fa-quote-right"></i>
                    </div>
                    <img src="img/client1-612x612.jpg" alt=""></img>
                    <h6>“Gracias a las habilidades de Leandro, nuestra tienda en línea ahora tiene un diseño moderno y atractivo. Los clientes adoran la interfaz intuitiva y la velocidad de carga. ¡Lo recomiendo sin dudarlo!”</h6>
                    <div class="footcard">
                        <div class="links">
                                <h2>Natalia Ramos</h2>
                                <h5>Dueña de tienda Online</h5>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="quote">
                        <i class="fa-solid fa-quote-right"></i>
                    </div>
                    <img src="img/client2-612x612.jpg" alt=""></img>
                    <h6>“Leandro hizo un trabajo excepcional al rediseñar mi blog de viajes. Su conocimiento fue fundamental para crear una experiencia de usuario única. ¡Estoy encantado con los resultados!”</h6>
                    <div class="footcard">
                        <div class="links">
                            <h2>Sergio Barbieri</h2>
                            <h5>Blogger de viajes</h5>
                         </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
    
                <div class="card">
                    <div class="quote">
                        <i class="fa-solid fa-quote-right"></i>
                    </div>
                    <img src="img/client3-612x612.jpg" alt=""></img>
                    <h6>“Leandro demostró su experiencia en Angular al desarrollar nuestra aplicación web. Su atención al detalle y habilidades de resolución de problemas fueron impresionantes. ¡Gracias!”</h6>
                    <div class="footcard">
                        <div class="links">
                           <h2>Laura De Nucci</h2>
                           <h5>Dueña de empresa de viajes</h5>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Testimonios