import React, { useContext } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity } = useContext(Context)
  return (
    <Flex
    >
    <Box m={4}
      fontSize={'7vh'}
      color={'#084E54'}
      >
      <Link to='/cart'>
        <LiaCartArrowDownSolid /></Link>
      <Box fontSize={'4vh'}>
        <Box>{getQuantity() > 0 && getQuantity()}</Box>
      </Box>
    </Box>
    </Flex>
  );
};

export default CartWidget;
