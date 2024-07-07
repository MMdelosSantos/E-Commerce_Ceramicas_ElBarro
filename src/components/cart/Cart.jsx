import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Heading,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Flex
} from '@chakra-ui/react'
import { IoTrashBin } from "react-icons/io5";
import { Link } from 'react-router-dom';
//import Checkout from '../checkout/Checkout';


const Cart = () => {
    const { cart, removeItem, clearCart, getTotal, incrementarItem, decrementarItem } = useContext(Context)
    if (cart.lenght === 0) {
        return(
        <Flex direction={'column'} justify={'center'} alig={'center'}>
            <Heading>Todavía no hay productos en el carrito</Heading>
            <Link to='/'>Ver productos</Link>
        </Flex>
        )
    } else {
        return (
            <TableContainer>
                <Table variant='striped' colorScheme= 'pink'>
                    <Thead>
                        <Tr>
                            <Th>Nombre</Th>
                            <Th>Cantidad</Th>
                            <Th></Th>
                            <Th>Precio</Th>
                            <Th>Subtotal</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            cart.map((prod) => (
                                <Tr key={prod.id}>
                                    <Td>{prod.nombre}</Td>
                                    <Td>{prod.quantity}</Td>
                                    <Td><Button onClick={() => decrementarItem(prod.id)}>-</Button>
                                    {prod.quantity}
                                    <Button onClick={() => incrementarItem(prod.id, prod.stock)}>+</Button>
                                    </Td>
                                    <Td>{prod.precio}</Td>
                                    <Td>{prod.precio * prod.quantity}</Td>
                                    <Td><Button onClick={() => removeItem(prod.id)}>
                                        <IoTrashBin />
                                    </Button></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th><Button onClick={() => clearCart()}>Vaciar el Carrito</Button></Th>
                            <Th><Heading>{getTotal()}</Heading></Th>
                            <Th><Link to='/Checkout'>Finalizar compra</Link></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        )
    }
}

export default Cart