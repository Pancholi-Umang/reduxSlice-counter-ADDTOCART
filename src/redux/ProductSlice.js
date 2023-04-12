import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const STATUSES = Object.freeze({
    IDLE:"idle",
    ERROR:"error",
    LOADING:"loading",
})

const productSlice = createSlice({
    name:"fetchProduct",
    initialState:{
        data:[],
        status:STATUSES.IDLE,
    },
    reducers:{
        getData(state, action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload
        }
    }
})

export const { getData, setStatus } = productSlice.actions
export default productSlice.reducer

export function fetchProduct(){
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING));
        try{
                axios.get(`https://fakestoreapi.com/products`)
                .then((res)=>{
                    dispatch(getData(res.data));
                    dispatch(setStatus(STATUSES.IDLE))
                })
        }catch(error){
            dispatch(setStatus(STATUSES.ERROR))
            console.log(error)
        }
    }
}