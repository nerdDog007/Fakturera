import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggedIn:false,
    email:"",
    token:null,
    password:"",
    username:"",
    logEmail:"",
    logPassword:"",
    name:"",
    user:null

}
const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setIsLoggedIn:(state,action)=>{ state.isLoggedIn=action.payload},
        setEmail:(state,action)=>{ state.email=action.payload},
        setToken:(state,action)=>{ state.token=action.payload},
        setPassword:(state,action)=>{ state.password=action.payload},
        setUsername:(state,action)=>{ state.username=action.payload},
        setName:(state,action)=>{ state.name=action.payload},
        setUser:(state,action)=>{ state.user= action.payload},
        setLogEmail:(state,action)=>{ state.logEmail=action.payload},
        setLogPassword:(state,action)=>{ state.logPassword=action.payload}
    }
})
export const {setEmail,setIsLoggedIn,setLogEmail,setLogPassword,setUser,setName,setPassword,setToken,setUsername} = AuthSlice.actions
export default AuthSlice.reducer