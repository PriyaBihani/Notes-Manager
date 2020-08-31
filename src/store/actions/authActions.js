export const signIn =(credentials)=>{
    return(dispatch,getState, {getFirebase})=>{
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credentials.email, 
            credentials.password
        ).then(()=>{
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut =()=>{
    return(dispatch, getState,{getFirebase})=>{
        const firebase = getFirebase()

        firebase.auth().signOut().then(()=>{
            dispatch({ type : 'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp=(newUser)=>{
    return(dispatch, getState, {getFirebase, getFirestore})=>
    {
        const firebase = getFirebase()
        const firestore= getFirestore()

        //when we signup or create a user, the email and password are stored in the authentication service of the firebase but the other details like name and initials are can't be stored in the auth service so we create a users collection, having there details, with the same id. 
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=>{
            //we used .add previously to add the project but that will automatically generates the id but .doc will generate the id which we have passed in.
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(()=>{
            dispatch({ type: 'SIGNUP_SUCCESS'})// who told you to go the auth reducer??
        }).catch((err)=>{
            dispatch({ type:'SIGNUP_ERROR',err})
        })
    }
}