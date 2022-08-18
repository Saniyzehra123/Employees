 
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,

} from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
 
  import {useLocation,useNavigate} from 'react-router-dom'
 import "./Login.css"
 

export default function Login() {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.reducer.auth);
    // const authStatus = useSelector((store) => store.authReducer.auth)
 const location = useLocation()   
const [userEmail, setUserEmail] =useState("saniya123@masai.com");
const [userPassword, setUserPassword] =  useState();
const handelUserEmailChange = (e) => {
    console.log("email",e.target.value )
     setUserEmail(e.target.value);
}
const handelUserPasswordChange = (e) => {
    console.log("password",e.target.value )

        setUserPassword(e.target.value);
}
const submitHandler = (e) => {
    console.log("submit",userEmail,userPassword)
    e.preventDefault();
    // dispatch(logIn({email:userEmail,password:userPassword})) ;
 
// if(location.state){
//     navigate( location.state,{replace:true})
// } 
}

// useEffect(() => {
//     if(location?.state?.pathname && authStatus){
//             navigate( location.state?.pathname,{replace:true})
//         } 
//     },[location?.state,navigate,authStatus])
// console.log(location)
 
 
 
 
  return (
    <div className='logcs'> 
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}
   
    >
     
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
            <form onSubmit={submitHandler}>  
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" 
             value ={userEmail}
            onChange={handelUserEmailChange}/>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input 
            type="password"
            value ={userPassword}
            onChange={handelUserPasswordChange}
            />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.400'}>Forgot password?</Link>
            </Stack>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              type="submit"
        //    onClick={submitHandler}
              >
              Sign in
            </Button>
          </Stack>
          </form>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  </div>
  )
}
