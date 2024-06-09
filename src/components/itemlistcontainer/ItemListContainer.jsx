import React, { useEffect, useState } from "react";
import { Heading, Flex, Center } from "@chakra-ui/react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../itemlist/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  console.log(categoryId)

  useEffect(() => {
    setLoading(true)
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()

    dataProductos
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoryId])


  return (
    <Flex direction={'column'} justify={'center'} align={'center'} bgColor={'#FFF1D2'}>
      <Heading color={'#084E54'}>{title}</Heading>
      {
        loading ?
          <Flex justify={'center'} align={'center'} h={'100%'}><Spinner color='#EA9AB2' size={'xl'} />
          </Flex>
          :
          <ItemList products={products} />
      }
    </Flex>
  );
};

export default ItemListContainer;
