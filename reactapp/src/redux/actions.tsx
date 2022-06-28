import * as types from './actionTypes'
import axios  from 'axios'

const getUsers =(users: any)=>({
    type : types.GET_USERS,
    payload : users
})
const userDeleted=()=>({
    type:types.DELETE_USERS
})
const userAdded=()=>({
    type:types.ADD_USERS
})
const getUser=(data:any)=>({
    type:types.GET_SINGLE_USER,
    payload:data
})
const userUpdated=(data:any)=>({
    type:types.PUT_SINGLR_USER,
    payload:data
})


export const loadUsers =() =>{
    return function(dispatch: any){
        console.log("worked")
        axios.get('/user')
        .then((resp)=>{
            dispatch(getUsers(resp.data));
        })
        .catch((err: any)=>console.log(err));
    }
}



export const deleteUser =(id:number) =>{
    return function(dispatch: any){
        axios.delete(`/user/${id}`)
        .then((resp)=>{
        dispatch(userDeleted())
        dispatch(loadUsers())
        })
     }
}

export const addUser =(data:any) =>{
    return function(dispatch: any){
        console.log("Data in action add",data)
        axios.post(`/user/`,data)
        .then((resp)=>{
        dispatch(userAdded())
        dispatch(loadUsers())
    })
        
    }
}
export const putUser =(id:any,data:any) =>{
    return function(dispatch: any){
        console.log("Data in action add",data)
        axios.put(`/user/${id}`,data)
        .then((resp)=>{
        dispatch(userUpdated(resp.data))
        dispatch(loadUsers())
    })
        
    }
}


export const getSingleUsers =(id:any) =>{
    return function(dispatch: any){
        axios.get(`/user/${id}`)
        .then((resp)=>{
            dispatch(getUser(resp.data));
        })
        .catch((err: any)=>console.log(err));
    }
}
