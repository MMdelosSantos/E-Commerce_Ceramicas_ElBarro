import React from 'react'
import CartWidget from '../cartwidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    Image
} from '@chakra-ui/react'
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Flex
            h={'10vh'}
            w={'100%'}
            justify={'space-between'}
            align={'center'}
            backgroundColor={'#17AFBD'}
            borderColor={'#EA9AB2'}
            borderBottomWidth={'5px'}>
            <Flex align={'center'}>
                <Link to='/'>
                    <Image maxH='10vh'
                        objectFit='cover'
                        src='Logo_color.png'
                        alt='Logo Ceramicas El Barro' />
                </Link>
                <Menu>
                    <MenuButton as={Button} rightIcon={<FaArrowDown />}>
                        Categorías
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to='/categorias/Menaje'>Menaje</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/categorias/Decoracion'>Decoración</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/categorias/Joyeria'>Joyería</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/categorias/Herramientas'>Herramientas</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/categorias/EsmaltesyPigmentos'>Esmaltes y Pigmentos</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Flex>
                <CartWidget />
            </Flex>
        </Flex>)
}
export default NavBar