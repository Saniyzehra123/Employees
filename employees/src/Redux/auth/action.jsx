// import Axios from 'axios';
import axios from "axios";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export  const LOGIN_FAILURE = 'LOGIN_FAILURE';

const    loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}
const  loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
        // user
    }
}
const  loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload
        // error
    }
}

const  logIn = (payload) => (dispatch) => {
    dispatch(loginRequest());
     axios.post('/api/login', payload,{baseURL:'https://masai-api-mocker.herokuapp.com/auth/register'})

   // .then(r =>  console.log(r))

    .then(r => dispatch( loginSuccess(r.data)))
    .catch(e =>
    // console.log(e))
   dispatch( loginFailure(e.data)));
}
export {logIn}
