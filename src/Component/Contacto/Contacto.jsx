import "../Contacto/Contacto.css"
import * as yup from 'yup';
import { Formik , Form } from 'formik';
import { Flex, Box, Button, Textarea, Input, Text, useColorModeValue} from "@chakra-ui/react"
import { colors } from '../../themes/themes';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Reveal } from "../Reveal/Reveal";

const Contacto = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const bg = useColorModeValue(colors.b, colors.vg)
    const color = useColorModeValue(colors.n, colors.b)
  
    const initialValues = {
      first_name: '',
      user_email: '',
      subject: '',
      message: '',
    };

    const onSubmit = (values, { resetForm }) => {
        emailjs.send(
          'service_2cyygpq',
          'template_rx8e04c',
          values,
          'DO2GMzDhmPKvoT1bW'
        ).then((response) => {
          console.log('Envío Exitoso!', response.status, response.text);
          setSuccessMessage('El formulario se ha enviado correctamente.');
          resetForm(); // Limpia el formulario
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000); // Oculta el mensaje después de 5 segundos
        }).catch((error) => {
          console.log('FAILED SENDING MAIL...', error);
        });
      };

      const validationSchema = yup.object({
        first_name: yup.string().required("Complete este campo"),
        user_email: yup.string().email("Se requiere de un email válido").required("Complete este campo"),
        subject: yup.string().required("Complete este campo"),
        message: yup.string().required("Complete este campo")
      });
    

    return(
        <>
        <section class="contact-me" id="contact">
        <Flex className='contact-me' mt={"100px"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} >
            <Reveal>
            <Text as={"h3"} fontSize={"1.6em"} color={color} fontWeight={"bold"}>Contactame</Text>
            </Reveal>
            <Text as={"h4"} fontFamily={"caveat"} color={color} fontSize={"1.3rem"} fontWeight={"bold"}><Text as={"span"} fontFamily={"montserrat"} fontSize={"1rem"}>Hablemos sobre</Text> Tus Ideas</Text>
            </Flex>
            
            <Flex className="contactdivs" justifyContent={"center"} flexDirection={["column","column","row","row"]} pt={"10px"}>
                <div class="contleft">
                    <Reveal>
                    <div class="container">
                        <i class="fa-regular fa-map"></i>
                        <div class="barra"></div>                  
                        <div class="datos">
                            <Text as={"h4"} color={color}>Dirección</Text><h3>Junin 1453, S.M. de Tucumán</h3>
                        </div>
                    </div>
                    </Reveal>

                    <Reveal>
                    <div class="container">
                        <i class="fa-regular fa-user"></i><div class="barra"></div>                    
                        <div class="datos">
                          <Text as={"h4"} color={color}>Freelance</Text><h3>Disponible</h3>
                        </div>
                    </div>
                    </Reveal>
                    
                    <Reveal>
                    <div class="container">
                        <i class="fa-regular fa-envelope"></i><div class="barra"></div>                   
                        <div class="datos">
                          <Text as={"h4"} color={color}>Email</Text><h3>leandrorojano@gmail.com</h3>
                        </div>
                    </div>
                    </Reveal>

                    <Reveal>
                    <div class="container">
                        <i class="fa-solid fa-mobile-screen"></i><div class="barra"></div>                    
                        <div class="datos">
                          <Text as={"h4"} color={color}>Teléfono</Text><h3>+5493813150489</h3>
                        </div>
                    </div>
                    </Reveal>
                </div>
                
                <Flex className="contright" w={"100%"} pt={"20px"} justifyContent={"center"}>

<Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      w={"100%"}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur
      }) => (
        <Box as='div' className="contacto" w={["90%","80%","70%","60%"]} id="contacto" display='flex' flexDirection='column' justifyContent={"center"}>
          <Box as={Form} className="formulario" onSubmit={handleSubmit} width={['95%', '95%', '100%']} alignSelf='center'>
            <Flex as='div' flexDirection='column' mb='1'>
              <Input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Nombre"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                width='100%'
                bg={bg}
                color={color}
                border={"2px solid"}
                borderRadius={"25px"}
                p={"10px"}
                _hover={{ border: "2px solid #28a587"}}
                _focus={{ 
                  borderColor: "#28a587",
                  boxShadow: "0 0 0 1px #28a587",
                  color: "#006400",
                  background: "#fff"}}
              />
              <Box role="alert" mt='0.1em' minHeight='1.7em' color={"red"}>
                {touched.first_name && errors.first_name ? errors.first_name : ' '}
              </Box>
            </Flex>

            <Flex as='div' flexDirection='column' mb='1'>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Asunto"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                width='100%'
                bg={bg}
                color={color}
                border={"2px solid"}
                borderRadius={"25px"}
                p={"10px"}
                _hover={{ border: "2px solid #28a587"}}
                _focus={{ 
                  borderColor: "#28a587",
                  boxShadow: "0 0 0 1px #28a587",
                  color: "#006400",
                  background: "#fff"}}
              />
              <Box className="alert alert-danger" role="alert" mt='0.1em' minHeight='1.6em' color={"red"}>
                {touched.subject && errors.subject ? errors.subject : ' '}
              </Box>
            </Flex>

            <Flex as='div' flexDirection='column' mb='1'>
              <Input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Email"
                value={values.user_email}
                onChange={handleChange}
                onBlur={handleBlur}
                width='100%'
                bg={bg}
                color={color}
                border={"2px solid"}
                borderRadius={"25px"}
                p={"10px"}
                _hover={{ border: "2px solid #28a587"}}
                _focus={{ 
                  borderColor: "#28a587",
                  boxShadow: "0 0 0 1px #28a587",
                  color: "#006400",
                  background: "#fff"}}
              />
              <Box className="alert alert-danger" role="alert" mt='0.1em' minHeight='1.6em' color={"red"}>
                {touched.user_email && errors.user_email ? errors.user_email : ' '}
              </Box>
            </Flex>

            <Flex as='div' flexDirection='column' mb='2'>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Mensaje"
                bg={bg}
                color={color}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                width='100%'
                minHeight='8em'
                border={"2px solid"}
                borderRadius={"15px"}
                p={"10px"}
                resize={"none"}
                _hover={{ border: "2px solid #28a587",
                }}
                _focus={{ 
                  borderColor: "#28a587",
                  boxShadow: "0 0 0 1px #28a587",
                  color: "#006400",
                background: "#fff"}}
              />
              <Box role="alert" mt='0.1em' minHeight='1.7em' color={"red"}>
                {touched.message && errors.message ? errors.message : ' '}
              </Box>
            </Flex>

            <Flex as='div' mb='4' justifyContent='center'>
              <Button className="small-button" type="submit" bg={colors.vo} color={colors.v} width={['70%', '60%', '55%', '50%', '40%']} borderRadius='20px'>
                Enviar
              </Button>
            </Flex>
            
            <Flex minHeight='4em' justifyContent='center'>
            {successMessage && (
              <Text color={colors.v} mt="1" textAlign="center">{successMessage}</Text>
            )}
            </Flex>
          </Box>
        </Box>
      )}
    </Formik>
                </Flex>
                </Flex>
        </section>
        </>
    )
}

export default Contacto