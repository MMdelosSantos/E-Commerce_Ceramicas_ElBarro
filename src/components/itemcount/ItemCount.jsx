import { Flex, Button, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'


const ItemCount = ({ stock, valorInicial, onAdd }) => {
    const [count, setCount] = useState(valorInicial)

    const incrementar = () => {
        count < stock && setCount(count + 1)
        console.log(count)
    }

    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
        console.log(count)
    }

    return (
        <Flex>
            <Button onClick={decrementar} m={'5px'} color={'#ffff'} bgColor={'#EA9AB2'}>-</Button>
            <Heading color={'#17AFBD'}>{count}</Heading>
            <Button onClick={incrementar} m={'5px'} color={'#ffff'} bgColor={'#EA9AB2'}>+</Button>
            <Button onClick={() => onAdd(count)} m={'5px'} color={'#ffff'} bgColor={'#EA9AB2'}>Agregar al pedido</Button>
        </Flex>
    )
    //return (
    //    <Flex>ItemCount</Flex>
    //)
}

export default ItemCount