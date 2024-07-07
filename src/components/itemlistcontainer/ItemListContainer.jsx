import React, { useEffect, useState } from "react";
import { Heading, Flex, Spinner, Box } from "@chakra-ui/react";
import ItemList from "../itemlist/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const coleccion = collection(db, 'productos')
      const queryRef = !categoryId ?
        coleccion
        :
        query(coleccion, where('categoria', '==', categoryId))

      const response = await getDocs(queryRef)
   
    const productos = response.docs.map((doc) => {
      const newItem = {
        ...doc.data(),
        id: doc.id
      }
      return newItem
    })
    setProducts(productos)
    setLoading(false)
  }


    getData()

  }, [categoryId])


  return (
    <Box bgColor={'#FFF1D2'}  minH="100vh">
      <Flex direction={'column'} justify={'center'} w={'100%'} h={'100%'}>
        <Heading color={'#084E54'} margin={'1%'}>{title}</Heading>
        {
          loading ?
            <Flex justify={'center'} align={'center'} h={'100%'}><Spinner color={'#EA9AB2'} size={'xl'} />
            </Flex>
            :
            <ItemList products={products} />
        }
      </Flex>
    </Box>
  );
};

export default ItemListContainer;
