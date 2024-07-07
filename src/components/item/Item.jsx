import { Flex, Button, Card, CardHeader, Image, Stack, Heading, Text, Divider, ButtonGroup, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, descripcion, categoria, subcategoria,stock, precio, imagen }) => {
  const rutaImagen = `/imagenes/${imagen}`



  return (

    <Card>
      <CardHeader>
        <Heading size='md' color={'#17AFBD'}>{nombre}</Heading>
      </CardHeader>
      <CardBody>
        <Image
          src={rutaImagen} alt='imagen de producto Cerámicas El Barro'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Text color={'#EA9AB2'} fontSize='2xl'>
            UYU ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' bgColor={'#EA9AB2'} color={'#ffffff'}>
            <Link to={`/producto/${id}`}>Más detalles</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default Item