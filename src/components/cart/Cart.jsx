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
    TableCaption,
    TableContainer,
    Button,
    Flex
} from '@chakra-ui/react'
import { IoTrashBin } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useContext(Context)
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
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Nombre</Th>
                            <Th>Cantidad</Th>
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
                            <Th><Link to=''>Finalizar compra</Link></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        )
    }
}

export default Cart