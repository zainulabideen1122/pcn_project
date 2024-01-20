import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name : 'login',
    initialState:[],
    reducers:{
        isLoginTrue(state, action){
            //login true
            state.push({isLogin:true, user : action.payload})
        },
        isLoginFalse(state, action){
            //login false
            //return state = false
        }

    }
})

const store = configureStore({
    reducer : {
        isLogin : loginSlice.reducer
    }
})

store.dispatch({
    type:'login/isLoginTrue',
    payload : {name : "Zain", email:"Zainnisarmughal@gmail.com", password : "Zain123"}
})

console.log(store.getState())

// export default {store};