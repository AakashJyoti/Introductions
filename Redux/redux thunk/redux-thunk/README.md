Action ---> Dispatch ---> Reducer ---> Store 

React Redux Actions :-

1. Change current state in Application
2. Package of information which is passed to store
3. Actions are plain JS objects
   eg:- 
   payload is the information or data for action
   const addUser = {
        'type': "ADD_USER", 
        'payload':{
            'name' : "Aakash",
            'email' : "aakash@gmail.com"
        }
    }

4. Must Use Action Creators
    eg:-
    export const addUser = (user) => ({
        type: "ADD_USER",
        payload: user,
    });

5. UseDiapatch to send Action to Reducer 
    Located in component of any page
    eg:-
        dispatch(addUser())

6. Try to get different Action Files for different components
