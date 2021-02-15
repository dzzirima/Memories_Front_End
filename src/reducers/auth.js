import {AUTH,LOGOUT} from  '../constants/actionTypes'



const authReducer = (state ={authData :null},action) => {
   switch (action.type) {
       case AUTH:
        // store the returned object inthe local storage
        // this data can be used even  when we other things
        
        localStorage.setItem('profile',JSON.stringify({...action?.data}))
           console.log(action?.data)
           return state
   
       default:
           return state
   }
}

export default authReducer
