import { React, useContext, useState } from 'react'
import ItemCount from '../itemcount/ItemCount'
import { ToastContainer, toast } from 'react-toastify'
import { Flex, Card, CardBody, CardFooter, CardHeader, Image, Stack, Text, Divider, Heading, Button } from '@chakra-ui/react'
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({ id, nombre, categoria, subcategoria, descripcion, precio, imagen, stock }) => {
    const [cantidad, setCantidad] = useState(0)

    const { addItem } = useContext(Context)

    const onAdd = (quantity) => {
        const item = {
            id,
            nombre,
            precio,
            stock
        }
        addItem(item, quantity)
        toast(`Agregaste ${quantity} unidad/es`)
        setCantidad(quantity)
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
                        <Text> Stock disponible: {stock}
                        </Text>
                        <Text color={'#EA9AB2'} fontSize='2xl'>
                            UYU ${precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    {
                        cantidad > 0 ?
                        <Flex>
                            <Button m={'5px'} color={'#ffff'} bgColor={'#EA9AB2'}>
                                <Link to='/Cart'> Ir al carrito </Link>
                            </Button>
                            <Button m={'5px'} color={'#ffff'} bgColor={'#EA9AB2'}>
                            <Link to='/'> Seguir comprando </Link>
                            </Button>
                            </Flex>
                            :
                            <>
                <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
                <ToastContainer /> </>
                    }
                </CardFooter>
            </Card>
        </Flex>
    )
}

export default ItemDetail