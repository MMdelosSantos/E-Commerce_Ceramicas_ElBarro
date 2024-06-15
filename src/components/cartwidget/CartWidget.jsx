import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity } = useContext(Context)
  return (
    <Box m={4}
      fontSize={'7vh'}
      color={'#084E54'}>
      <Link to='/cart'>
        <LiaCartArrowDownSolid /></Link>
        <span>{ getQuantity() > 0 && getQuantity()}</span>
    </Box>
  );
};

export default CartWidget;
