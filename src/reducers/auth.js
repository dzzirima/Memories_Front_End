import {AUTH,LOGOUT} from  '../constants/actionTypes'



const authReducer = (state ={authData :null},action) => {
   switch (action.type) {
       case AUTH:
        // store the returned object inthe local storage
        // this data can be used even  when we other things

        localStorage.setItem('profile',JSON.stringify({...action?.data}))
           console.log(action?.data)
           return {...state,authData:action?.data}
        case LOGOUT:
            localStorage.clear()
            return {...state,authData:null}
   
       default:
           return state
   }
}

export default authReducer
