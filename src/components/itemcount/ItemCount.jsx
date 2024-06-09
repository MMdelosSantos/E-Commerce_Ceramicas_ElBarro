import { Flex } from '@chakra-ui/react'
import { Button } from 'bootstrap'
import React, { useState } from 'react'


const ItemCount = ({ stock, valorInicial, onAdd }) => {
    const [count, setCount] = useState(valorInicial)

    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
    }

    return (
        <Flex>
            <Button onClick={incrementar}>+</Button>
            {count}
            <Button onClick={decrementar}>-</Button>
            <Button onClick={() => onAdd(count)}>Agregar al pedido</Button>

        </Flex>
    )
    return (
        <div>ItemCount</div>
    )
}

export default ItemCount