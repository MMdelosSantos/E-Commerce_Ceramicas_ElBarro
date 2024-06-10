import { React } from 'react'
import ItemCount from '../itemcount/ItemCount'
import { ToastContainer, toast } from 'react-toastify'
import {  Flex, Box, Card, CardBody, CardFooter, CardHeader, Image, Stack, Text, Divider, Heading} from '@chakra-ui/react'


const ItemDetail = ({ id, nombre, categoria, subcategoria, descripcion, precio, imagen, stock }) => {

    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} unidad/es`)
    }

    const rutaImagen = `/imagenes/${imagen}`

    return (
        <Flex justify={'center'} bgColor={'#FFF1D2'}>
            <Card align={'center'} size={'sm'} h={'55%'} w={'50%'} m={'1%'}>
                <CardHeader>
                    <Heading size='md' color={'#17AFBD'}>{nombre}</Heading>
                </CardHeader>
                <CardBody>
                    <Image
                        src={rutaImagen} alt='imagen de producto Cerámicas El Barro'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Text> {descripcion}
                        </Text>
                        <Text color={'#EA9AB2'} fontSize='2xl'>
                            UYU ${precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
                    <ToastContainer />
                </CardFooter>
            </Card>
        </Flex>
    )
}

export default ItemDetail