// we can return functions in our actions creater due to thunk
// this is the action creator
//we will call this function which is basically an action creator, from the dispatch function then we will make an async call to the database and then dispatch the actual action which will proceed normally. Like first it will call the rootReducer and find the similarity and then the root reducer will call the actual functional reducer.
export const createProject =(project)=>{
    //getState here is the state of the rootREducer.
    return(dispatch, getState,{getFirebase, getFirestore})=>{
        //make async call to the database
        const firestore= getFirestore()
        const profile= getState().firebase.profile
        const authorId= getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            autorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=>{
            dispatch({ type:'CREATE_PROJECT', project:project})//dispatches the action to the reducer
        }).catch((err)=>{
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })
    }
}