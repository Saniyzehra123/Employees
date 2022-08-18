
 import * as types from './actionTypes';
import axios from 'axios';

const fetchDataRequest = (payload) =>  {
    return {
        type: types.FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataRequestSuccess = (payload ) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload 
    }
}

const fetchDataRequestFailure = (payload ) => {
    return {
        type: types.FETCH_DATA_FAILURE,
        payload 
    }
}
export const  fetchData =(payload)=>{
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios.get(`http://localhost:8080/employee_details`,{
            params:{
                ...payload,
            }
        })
        .then(r => dispatch(fetchDataRequestSuccess(r.data)))
        .catch(e => dispatch(fetchDataRequestFailure(e.data)));
     
    }
    }
