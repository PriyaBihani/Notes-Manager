import AuthReducer from './authReducer'
import ProjectReducer from './projectReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'// this is a pre made reducer which is gonna syncing our firestore data with our state in the background. this will have the config of firebase.
import { firebaseReducer} from 'react-redux-firebase'// it is is used for syncing the firebase info including authentication

const rootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer,
    firestore: firestoreReducer, // now automatically firestore reducer will sync the data in the firestore to the firestore property in this state
    firebase: firebaseReducer // it will sync our auth status on firebase with our redux app in the state and will populate this firebase object on the state.
})

export default rootReducer