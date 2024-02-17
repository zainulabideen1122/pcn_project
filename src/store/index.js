import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name : 'login',
    initialState:{
        isLogin:false, 
        user : ''
    },
    reducers:{
        loginTrue(state, action){
            //login true
            state.isLogin = action.payload.isLogin;
            state.user = action.payload.user;
        },
        loginFalse(state, action){
            //login false
            //return state = false
            state.isLogin = false;
            state.user = '';
            console.log("inner dispatch called")
        }

    }
})

const userSlice = createSlice({
    name : 'user',
    initialState : [{
        name : 'Zain',
        email : 'zain@gmail.com',
        password : 'zain123',
        
    }],
    reducers : {
        addUser (state, action){
            state.push(action.payload);
        },
        updateUser(state, action){
            //update the user
        },
        removeUser(state, action)
        {
            //remove user
        }
    }
})

const store = configureStore({
    reducer : {
        loginUser : loginSlice.reducer,
        users : userSlice.reducer
    }
})

// store.dispatch({
//     type:'login/loginTrue',
//     payload : {isLogin:true, user:{name : "Zain", email:"Zainnisarmughal@gmail.com", password : "Zain123"}}
// })

// console.log(store.getState())

 export default store;