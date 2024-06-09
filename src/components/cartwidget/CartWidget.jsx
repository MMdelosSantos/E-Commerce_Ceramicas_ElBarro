import React from "react";
import { Box } from "@chakra-ui/react";
import { LiaCartArrowDownSolid } from "react-icons/lia";

const CartWidget = () => {
  return (
    <Box m={4}
      fontSize={'7vh'}
      color={'#084E54'}>
      <LiaCartArrowDownSolid />
    </Box>
  );
};

export default CartWidget;
