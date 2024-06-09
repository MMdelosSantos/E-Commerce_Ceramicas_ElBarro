import { React} from 'react'
import ItemCount from '../itemcount/ItemCount'
import { ToastContainer, toast } from 'react-toastify'
import { Box } from '@chakra-ui/react'


const ItemDetail = ({ id, nombre, categoria, subcategoria, descripcion, precio, imagen, stock }) => {

    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} unidad/es`)
    }

    const rutaImagen = `/imagenes/${imagen}`

    return (
        <Box>
            Artículo:{nombre}
            Descripción:{descripcion}
            Precio en $ UYU: {precio}
            <img src={rutaImagen} alt='Imagen de producto Cerámicas El Barro'></img>
            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
            <ToastContainer/>
        </Box>
    )
}

export default ItemDetail