import { Flex, Button} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, descripcion, categoria, subcategoria, precio, imagen }) => {
  const rutaImagen = `/imagenes/${imagen}`
  


  return (
    <div>
      <p>{nombre}</p>
      <p>{precio}</p>
      <img src={rutaImagen} alt='imagen de producto Cerámicas El Barro'></img>
      <Flex>
        <Button>
          <Link to={`/producto/${id}`}>Más detalles</Link>
        </Button>
      </Flex>
    </div>
  )
}

export default Item