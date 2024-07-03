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
import { addDoc, collection, } from 'firebase/firestore'
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

        if(!user.email){
            errors.email= 'Por favor agrega tu email'
        }else if(!/\S+@\S+\.\S+/.test(user.email)){
            errors.email= 'El email no es válido'
        }
        setError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        if (!validateForm()) {
            return
        }
        const coleccion = collection(db, 'orders')

        try {
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
                    <FormControl>
                        <FormLabel>Nombre</FormLabel>
                        <Input type='text'
                            name='name'
                            placeholder='María Ramirez'
                            onChange={updateUser}
                        />
                        {error.name}
                        <FormLabel>Email</FormLabel>
                        <Input type='email'
                            name='email'
                            placeholder='MRamirez@gmail.com'
                            onChange={updateUser}
                        />
                        {error.email}
                        <FormLabel>Repetir Email</FormLabel>
                        <Input type='email'
                            name='repeatedEmail'
                            placeholder='MRamirez@gmail.com'
                            onChange={updateUser}
                        />
                        <FormLabel>Telefono</FormLabel>
                        <Input type='text'
                            name='phone'
                            placeholder='+59892968741'
                            onChange={updateUser}
                        />
                    </FormControl>
                </Flex>
                <Button m={'5%'} onClick={getOrder}>  Finalizar compra </Button>
            </Flex>
        </Center>
    )
}

export default Checkout