import { Box, SimpleGrid } from "@chakra-ui/react"
import React from 'react'
import Item from "../item/Item"

const ItemList = ({ products }) => {
    return (
        <Box m={'2.5vh'}><SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' >
            {
                products.map((prod) => (
                    <Box key={prod.id}>
                        <Item {...prod} />
                    </Box>
                ))
            }</SimpleGrid>
        </Box>
    )
}

export default ItemList