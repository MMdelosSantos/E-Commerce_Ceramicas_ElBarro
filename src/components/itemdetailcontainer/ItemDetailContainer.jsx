import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Spinner, Flex } from '@chakra-ui/react'
import ItemDetail from '../itemdetail/ItemDetail'
import { db } from '../../config/firebase'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    const navigate = useNavigate()
    useEffect(() => {
        const getData = async () => {

            const queryRef = doc(db, 'productos', productId)

            const response = await getDoc(queryRef)

            const newItem = {
                ...response.data(),
                id: response.id
            }
            setProducto(newItem)
            setLoading(false)
        }
        getData()
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