import React, { useContext, useState } from 'react'
import Context from '../../context/CartContext'
import {
    FormControl,
    FormLabel,
    Input,
    Flex,
    Button,
    Center,
    Heading,
    FormErrorMessage
} from '@chakra-ui/react'
import { addDoc, collection, doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from "../../config/firebase";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })

    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)

    const { cart, getTotal, clearCart } = useContext(Context)
    const navigate = useNavigate()

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        })
        )
    }

    const validateForm = () => {
        const errors = {}
        if (!user.name) {
            errors.name = ' Por favor escribe tu nombre'
        } else if (user.name.length < 3) { errors.name = 'El nombre debe tener al menos 3 caracteres' }

        if (!user.email) {
            errors.email = 'Por favor agrega tu email'
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'El email no es válido'
        }
        if (!user.repeatedEmail) {
            errors.repeatedEmail = 'Por favor vuelve a escribir  tu email'
        } else if (user.email !== user.repeatedEmail) {
            errors.repeatedEmail = 'Los email no coinciden'
        }
        if (!user.phone) {
            errors.phone = 'Agrega tu número de teléfono'
        } else if (user.phone.length < 8) {
            errors.phone = 'El número debe tener al menos 8 caracteres'
        }
        setError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        if (!validateForm()) {
            return
        }

        if (cart.length === 0) {
            Swal.fire({
                title: "No hay productos en tu carrito",
                icon: "error",
                confirmButtonText: "Aceptar"
            }).then(() => {
                clearCart()
                navigate('/')
            });
            return
        }
        const coleccion = collection(db, 'orders')
        try {
            for (const item of cart) {
                const docRef = doc(db, 'productos', item.id)
                const productDoc = await getDoc(docRef)
                const currentStock = productDoc.data().stock

                if (currentStock >= item.quantity) {
                    await updateDoc(docRef, {
                        stock: currentStock - item.quantity
                    })
                } else {
                    Swal.fire({
                        title: `No hay suficiente stock del producto ${item.nombre}`,
                        icon: "error",
                        confirmButtonText: "Aceptar"
                    })
                }
            }
            const order = {
                buyer: user,
                cart: cart,
                total: getTotal(),
            }
            const orderRef = await addDoc(coleccion, order)

            Swal.fire({
                title: "¡Gracias por tu compra!",
                text: `El núm. de orden es ${orderRef.id}`,
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("imagenes/nyan-cat-nyan.gif" )
                  left top
                  repeat
                `
            }).then(() => {
                clearCart()
                navigate('/')
            });
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <Center mt={'5%'}>
            <Flex direction={'column'} align={'center'} justify={'center'} width={'80%'}>
                <Heading m={'3%'}> Datos de facturación</Heading>
                <Flex w={'55%'} justify={'center'} align={'center'}>
                    <FormControl isInvalid={Object.keys(error).length > 0}>
                        <FormLabel>Nombre</FormLabel>
                        <Input type='text'
                            name='name'
                            placeholder='María Ramirez'
                            onChange={updateUser}
                        />
                        <FormErrorMessage>{error.name}</FormErrorMessage>
                        <FormLabel>Email</FormLabel>
                        <Input type='email'
                            name='email'
                            placeholder='MRamirez@gmail.com'
                            onChange={updateUser}
                        />
                        <FormErrorMessage>{error.email}</FormErrorMessage>
                        <FormLabel>Repetir Email</FormLabel>
                        <Input type='email'
                            name='repeatedEmail'
                            placeholder='MRamirez@gmail.com'
                            onChange={updateUser}
                        />
                        <FormErrorMessage>{error.repeatedEmail}</FormErrorMessage>
                        <FormLabel>Telefono</FormLabel>
                        <Input type='text'
                            name='phone'
                            placeholder='+59892968741'
                            onChange={updateUser}
                        />
                        <FormErrorMessage>{error.phone}</FormErrorMessage>
                    </FormControl>
                </Flex>
                <Button m={'5%'} onClick={getOrder}>  Finalizar compra </Button>
            </Flex>
        </Center>
    )
}

export default Checkout