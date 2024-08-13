import SkillsCard from '../SkillCard/SkillCard';
import { Flex, Text , useColorModeValue } from '@chakra-ui/react'
import { colors } from '../../themes/themes.js'

const Skills = () => {

  const bg = useColorModeValue(colors.b, colors.n)
  const color = useColorModeValue(colors.n, colors.b)

  const cardData = [
    {
      title: 'HTML',
      description: 'Tengo experiencia en crear la estructura básica de páginas web utilizando HTML. Esto incluye la creación de etiquetas, elementos y la organización del contenido.',
      porcentaje: '90',
      icon: 'fa-brands fa-html5'
    },
    {
      title: 'CSS',
      description: 'Puedo diseñar y estilizar páginas web utilizando CSS. Esto abarca desde la disposición de elementos hasta la selección de colores y fuentes.',
      porcentaje: '90',
      icon: 'fa-brands fa-css3-alt'
    },
    {
      title: 'JavaScript',
      description: 'Soy competente en el uso de JavaScript para crear interacciones dinámicas en las páginas web. Puedo manipular el DOM, realizar llamadas a APIs y crear efectos visuales.',
      porcentaje: '80',
      icon: 'fa-brands fa-js'
    },
    {
      title: 'React',
      description: 'He trabajado con React para construir aplicaciones de una sola página (SPA). Puedo crear componentes reutilizables, gestionar el estado y optimizar el rendimiento.',
      porcentaje: '70',
      icon: 'fa-brands fa-react'
    },
    {
      title: 'Angular',
      description: 'Tengo conocimientos en Angular, otro popular framework frontend. Puedo desarrollar aplicaciones escalables y mantener la coherencia en el código.',
      porcentaje: '40',
      icon: 'fa-brands fa-angular'
    },
    {
      title: 'Figma',
      description: 'Utilizo Figma para diseñar y prototipar interfaces de usuario. Puedo colaborar con diseñadores y traducir sus diseños a código.',
      porcentaje: '90',
      icon: 'fa-brands fa-figma'
    },
  ];

  return (
    <>
    <section className='skills' id='skills'>
      <Flex className='skills' flexDirection={"column"} alignItems={"center"} justifyContent={"center"} >
      <Text as={"h3"} fontSize={"1.6em"} color={color} fontWeight={"bold"}>Habilidades Profesionales</Text>
      <Text as={"h4"} fontFamily={"caveat"} fontSize={"1.3rem"} fontWeight={"bold"}><Text as={"span"} fontFamily={"montserrat"} fontSize={"1rem"}>Mi</Text> Talento</Text>

        <Flex flexDirection={'row'} flexWrap={"wrap"}  alignItems='center' gap='30px' mb={30} justifyContent={"center"} pt={"20px"}>
          {cardData.map((card, index) => (
            <SkillsCard key={index} {...card} />
          ))}
        </Flex>   
      </Flex>
    </section>
    </>
  );
};

export default Skills;
