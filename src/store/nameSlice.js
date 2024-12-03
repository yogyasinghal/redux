import { createSlice } from "@reduxjs/toolkit"

const initialState = [];
// reducers are pure fn
const nameSlice = createSlice({
    name:'name',
    initialState,
    reducers:{
        add(state,action){
            // old redux
            // return [...state,action.payload]
            state.push(action.payload);
        },
        // remove(state,action){
        //     return state.filter(item=>item.title!==action.payload)
        // }
    }
})

export const{add} = nameSlice.actions;
export default nameSlice.reducer; 