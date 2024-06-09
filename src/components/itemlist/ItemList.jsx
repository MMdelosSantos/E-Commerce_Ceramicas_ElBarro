import { Box } from "@chakra-ui/react"
import React from 'react'
import Item from "../item/Item"

const ItemList = ({ products }) => {
    return (
        <div>
            {
                products.map((prod) => (
                    <Box key={prod.id}>
                        <Item {...prod} />
                    </Box>
                ))
            }
        </div>
    )
}

export default ItemList