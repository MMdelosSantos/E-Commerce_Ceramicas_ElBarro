import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import { Spinner, Flex } from '@chakra-ui/react'
import ItemDetail from '../itemdetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    const navigate = useNavigate()
    useEffect(() => {
        getProductById(productId)
            .then((data) => {
                if (!data) {
                    navigate('/*')
                } else {
                    setProducto(data)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])


    console.log(producto)
    return (
        <>
            {
                loading ?
                    <Flex justify={'center'} align={'center'} h={'100%'}><Spinner color='#EA9AB2' size={'xl'} />
                    </Flex>
                    :
                    <ItemDetail {...producto} />
            }
        </>
    )
}

export default ItemDetailContainer