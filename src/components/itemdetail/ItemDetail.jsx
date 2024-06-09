import { React, Box } from 'react'
import ItemCount from '../itemcount/ItemCount'
import { ToastContainer, toast } from 'react-toastify'


const ItemDetail = ({ id, nombre, categoria, subcategoria, descripcion, precio, imagen, stock }) => {

    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} unidades`)
    }

    return (
        <Box>
            nombre:{nombre}
            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}></ItemCount>
            <ToastContainer>
            </ToastContainer>
        </Box>
    )
}

export default ItemDetail