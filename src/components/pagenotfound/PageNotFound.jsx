import React from 'react'
import { TbError404 } from "react-icons/tb";
import { Box, Flex } from '@chakra-ui/react';

const PageNotFound = () => {
    return (
        <Flex direction={'column'} justify={'center'} align={'center'} >
                <TbError404 size={'100px'} />
            <p>ERROR 404. PÁGINA NO ENCONTRADA </p>
        </Flex>
    )
}

export default PageNotFound