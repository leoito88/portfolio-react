import { extendTheme } from '@chakra-ui/react';
import { color } from 'framer-motion';

const theme = extendTheme({
  fonts: {
    body: "Mona sans, Helvetica Neue, Helvetica, sans-serif",
    heading: "Mona sans, Helvetica Neue, Helvetica, sans-serif",
  },
  colors: {
    n: 'rgb(16,24,32)',  // "Negro"
    b: 'rgb(249,249,249)', // "Blanco"
    vo: '#155445',  // "Verde Oscuro"
    v: '#28a587', // "Verde"
    cr: '#f0ece5', // "Crema"
    vb: 'rgba(240, 236, 229, 0.30)', // Vidrio Blanco
    vn: 'rgba(23, 23, 22, 0.30)', // vidrio negro
  },
  styles: {
    global: {
      'h1': {
        fontSize: ['2xl', '3xl', '4xl'],
        fontWeight: 'bold',
        color: 'b',
      },
      'h2': {
        fontSize: ['lg', 'xl', '2xl'],
        fontWeight: 'semibold',
        // color: 'none'
      },
      'h3': {
        fontSize: 'sm',
        fontWeight: 'semibold',
      },
      'p': {
        fontSize: ['md', 'md', 'lg'],
        // lineHeight: ['25px', '30px', '35px', '40px'],
      },
      'span': {
        // fontSize: 'sm',
        fontWeight: 'semibold',
        color: 'v',
      },
      'section': {
        // px: ['2%', '4%', '8%', '10%', null, '15%'],
        // my: ['0px', null, null, null, '80px', '90px'],
      },
      'body': {
        bg: 'n',
      },
      'a': {
        fontSize: [null, null, null, '14px', '16px', '18px'],
        fontWeight: 600,
        _hover: {
          cursor: 'pointer',
          // textDecoration: 'underline',
          color: "v",
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        bg: 'v',
        color: 'n',
        _hover: {
          bg: 'vo',
        },
      },
    },
    Menu: {
      baseStyle: {
        list: {
        },
        item: {
          bg: 'v',
          _hover: {
            bg: 'vo',
          },
        }
      },
    }
  },
});

export default theme;

  // Definir colores en formato rgb()
export const colors = {
    n: 'rgb(16,24,32)',  // "Negro"
    b: 'rgb(249,249,249)', // "Blanco"
    vo: '#155445',  // "Verde Oscuro"
    v: '#28a587', // "Verde"
    cr: '#f0ece5', // "Crema"
    crb: '#f8f5f2', // "Crema blanco"
    vg: '#3f4c50', // "Verde Grisaceo"
    vb: 'rgba(240, 236, 229, 0.30)', // Vidrio Blanco
    vn: 'rgba(23, 23, 22, 0.30)'
};