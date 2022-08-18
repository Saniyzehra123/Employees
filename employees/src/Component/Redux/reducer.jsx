import * as types from './actionTypes';

    const initialState = {
        isLoading: false,
       employees: [],
        error: null
    }
    export const   employeesreducer = (state = initialState, action) => {
        const {type, payload} = action;
        switch (type) {
            case types.FETCH_DATA_REQUEST:
                return {
                    ...state,
                    error:'',
                    isLoading: true
                }
            case types.FETCH_DATA_SUCCESS:
                return {
                    ...state,
                   employees: payload,
                    error:'',
                    isLoading: false,
                }
            case types.FETCH_DATA_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error :payload
                }
            default:
                return state;
        }
    }
