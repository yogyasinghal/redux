import { createSlice } from "@reduxjs/toolkit"
import data from "../Data/data";
// console.log("data=",data);
// const initialState = [];
// reducers are pure fn
const dataSlice = createSlice({
    name:'data',
    initialState:{
        data
    },
    reducers:{
        addBook(state,action){
            console.log("action",action.payload);
            // old redux
            // return [...state,action.payload]
            state.data.push(action.payload);
        },
        removeBook(state,action){
            return state.filter(item=>item.title!==action.payload.title)
        },
        setBook(state,action){
            console.log("setbook");
            console.log("action of set = ",action.payload);
            state.data = action.payload
        }
    }
})

export const{addBook,removeBook,setBook} = dataSlice.actions;
export default dataSlice.reducer; 