import Card from "../Card/Card"
import { Text, Flex, useColorModeValue } from "@chakra-ui/react"
import { colors } from '../../themes/themes.js'

const Servicios = () => {

    const cardData = [
        {
          title: 'Diseñador Web',
          description: 'Diseño, desarrollo y mantenimiento de sitios web. Trabajo con HTML, CSS y JavaScript para crear experiencias interactivas.',
          description2: 'Mis Funciones: Creo páginas, soluciono errores y optimizo el rendimiento.'
        },
        {
          title: 'Diseñador UI/UX',
          description: 'Diseño de interfaces atractivas y funcionales para el usuario de aplicaciones y sitios web.',
          description2: 'Mis Funciones: Creo wireframes, prototipos y colaboro con otros desarrolladores para la creación de futuras páginas.',
        },
        {
          title: 'Desarrollador de Apps',
          description: 'Creación de Webs Apps para dispositivos móviles (iOS o Android), u ordenador.',
          description2: 'Mis Funciones: Desarrollar, optimizar y solucionar problemas en aplicaciones.',
        }
      ];

      const color = useColorModeValue('#000', '#fff')

    return(
        <>
        <section class="services" id="services">
        <Text as={"h3"} color={color}>¿Qué hago?</Text>
            <Text as={"h2"} mb={20}><Text as={"span"}>Mis</Text> Servicios</Text>
            
            <Flex flexDirection={'row'} flexWrap={"wrap"}  alignItems='center' gap='30' h={300} mb={100} justifyContent={"center"}>
                {cardData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </Flex>
        </section>
    </>
    )
}
export default Servicios