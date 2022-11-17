import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../authOperations";
import { Input } from '@chakra-ui/react'

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();


    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password': 
                return setPassword(value)
            default:
                break;
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <Box display='flex' justifyContent='center' alignItems='center' textAlign='center' marginBottom='10px'>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <Text mb='8px' fontSize='20px' fontWeight='bold'> Name {name}
                    <Input placeholder='Ivan Ivanov' size='md' width='auto' variant='filled' type="text" name="name" value={name} onChange={handleChange}/>
                </Text >
                <Text mb='8px' fontSize='20px' fontWeight='bold'> Email {email}
                    <Input placeholder='ivan@ukr.net' size='md' width='auto' variant='filled' type="email" name="email" value={email} onChange={handleChange} />
                </Text>
                <Text mb='8px' fontSize='20px' fontWeight='bold'> Password {password}
                    <Input placeholder='ivanIvanov2910' size='md' width='auto' variant='filled' type='password' name="password" value={password} onChange={handleChange}/>
                </Text >
                <Button colorScheme='messenger' type="submit">Register</Button >
            </form>
        </Box>
    )
}