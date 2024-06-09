import { Flex, Button} from '@chakra-ui/react'
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
            <Button onClick={decrementar}>-</Button>
            {count}
            <Button onClick={incrementar}>+</Button>

            <Button onClick={() => onAdd(count)}>Agregar al pedido</Button>

        </Flex>
    )
    return (
        <div>ItemCount</div>
    )
}

export default ItemCount