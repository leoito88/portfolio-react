import "../Precios/Precios.css"
import { Flex, Box, Button, Textarea, Input, Text, useColorModeValue} from "@chakra-ui/react"
import { colors } from '../../themes/themes';
import { Reveal } from "../Reveal/Reveal";

const Precios = () => {

    const bg = useColorModeValue(colors.b, colors.n)
    const color = useColorModeValue(colors.n, colors.b)
    return(
        <>
        <section class="pricing" id="prices">
        <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"} >
        <Reveal>
        <Text as={"h3"} fontSize={"1.6em"} color={color} fontWeight={"bold"}>Precios</Text>
        </Reveal>

        <Text as={"h4"} fontFamily={"caveat"} color={color} fontSize={"1.3rem"} fontWeight={"bold"}><Text as={"span"} fontFamily={"montserrat"} fontSize={"1rem"}>Mi</Text> Tarifa De Precios</Text>
        

        <Reveal>
            <ul class="cards">
                <li class="card">
                    <div class="popular">
                        <h5>Popular</h5>
                    </div>
                    <h4>Por Hora</h4>
                    <div class="pricesdiv">
                        <h3>40<span>$</span></h3><h5>Hora</h5>
                    </div>
                    <h6>Ideal para pequeñas tareas, modificaciones rápidas o asesoría puntual. Incluye la creación de páginas de inicio sencillas, modificaciones en un diseño existente, solución de errores y asesoría técnica. Si tienes una tarea específica que requiere atención rápida, esta opción es la más adecuada.</h6>

                    <div class="details">
                        <h5><i class="fa-solid fa-check"></i> Diseño Responsivo</h5>
                        <h5><i class="fa-solid fa-check"></i> Desarrollo Web</h5>
                        <h5><span>Prototipado</span></h5>
                        <h5><span>Publicidad</span></h5>
                    </div>
                    
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>

                    <a href="#contact" class="gradient-button">Comenzar Proyecto<i class="fa-solid fa-arrow-right"></i></a>
                </li>

                <li class="card">
                    <h4>Semanal</h4>
                    <div class="pricesdiv">
                        <h3>100<span>$</span></h3><h5>Semana</h5>
                    </div>
                    <h6>Adecuada para proyectos más extensos o mantenimiento contínuo. Puedo desarrollar y mantener un sitio web básico, realizar actualizaciones regulares, optimizar el rendimiento y resolver problemas. Es una excelente opción si necesitas una colaboración más prolongada.</h6>

                    <div class="details">
                        <h5><i class="fa-solid fa-check"></i> Diseño Responsivo</h5>
                        <h5><i class="fa-solid fa-check"></i> Desarrollo Web</h5>
                        <h5><i class="fa-solid fa-check"></i> Prototipado</h5>
                        <h5><span>Publicidad</span></h5>
                    </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>

                    <a href="#contact" class="gradient-button">Comenzar Proyecto<i class="fa-solid fa-arrow-right"></i></a>
                </li>

                <li class="card">
                    <h4>Full Time</h4>
                    <div class="pricesdiv">
                        <h3>980<span>$</span></h3><h5>Mes</h5>
                    </div>
                    <h6>Recomendada para colaboraciones a largo plazo, gestión completa del sitio o soporte contínuo. Incluye la administración integral de tu sitio web: actualizaciones, seguridad, optimización, seguimiento de métricas y ajustes según tus necesidades. Si buscas una asociación a largo plazo, esta opción es la más conveniente</h6>

                    <div class="details">
                        <h5><i class="fa-solid fa-check"></i> Diseño Responsivo</h5>
                        <h5><i class="fa-solid fa-check"></i> Desarrollo Web</h5>
                        <h5><i class="fa-solid fa-check"></i> Prototipado</h5>
                        <h5><i class="fa-solid fa-check"></i> Publicidad</h5>
                    </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>

                    <a href="#contact" class="gradient-button">Comenzar Proyecto<i class="fa-solid fa-arrow-right"></i></a>
                </li>
            </ul>
            </Reveal>
            </Flex>
        </section>
        </>
    )
}

export default Precios