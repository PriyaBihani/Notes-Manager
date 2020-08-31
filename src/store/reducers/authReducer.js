const initState={
    authError:null
}

// why it is returning the object?? and where does this data go??
// Remember the store is created at index.js and that store handles the states and refer it to the state tree. So when the object is returned in the case it is updating the state (initState) and in turn the state tree. We can pass the preloaded state in the createStore function.
const authReducer =(state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout succes')
        case 'SIGNUP_SUCCESS':
            console.log('sign up success')
            return{
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('sign up error')
            return{
                ...state,
                authError:action.err.message
            }    
        default:
            return state      
    }
}

export default authReducer