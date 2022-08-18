
 import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE} from './action';

const initialState = {
    auth : false ,
    token:'',
    error:false,
}

export const   reducer = (state = initialState, action) => {  

    const {type, payload} = action;
     switch(type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                auth : false,
                token:'',
                error:false,
    
     }
        case LOGIN_SUCCESS:
            return {
                ...state,
                auth : true,
                token: payload.token,
                error:false,
              
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                auth : false,
                token:'',
                error:payload
          
            }
     
    
      default : 
        return state;
    }
    }