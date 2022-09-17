Action --> Dispatch --> Reducer --> Store --> Selector --> UI/UX --> Action

React Redux Actions :-

1. Change current state in Application
2. Package of information which is passed to store
3. Actions are plain JS objects
   eg:-
   payload is the information or data for action
   const addUser = {
        type': "ADD_USER",
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

React Redux Reducer :-

1. Reducers are pure javaScript functions :-
   ( Depends only on its aguments ,
   Does not change any of its arguments ,
   Does not depends any external variables )

    eg:-
    const initialState = []
    export const cartReducer = (state = initialState, action) => {
        switch(action.type)(
            case "ADD_USER" :
                return [...state,action.payload]
            default: 
                return state
        )
    }
    
2.  Reducer are automatically called when an action is dispatched
3.  Reducers are responsible for a perticular state in the store
4.  Reducers return the new form of state
5.  Reducer should be split into multiple reducers for different components
6.  Reducer should not change the state, it should return new form of state.
7.  Must use combineReducer and connect that reducer to the store dont connect multiple reducer to the store 

Connect Components with Redux :-

1.  React-redux provides a function called connect.
2.  useSelector can be used to select a part from state disrectly at component.
3.  Can use useDspatch hook to dispatch actions directly from component.
4.  Connect ( mapStateToPropsFunc, mapDispatchToPropsFunc)(Component)
5.  mapStateToPropsFunc function name can be anything, whenever state changes props value will also change, if props value change then that component will rerender. argument - state(Application State), we return abject of props
6.  mapDispatchToPropsFunc :- argument - dispatch function, dispatch function is used to dispatch and action, action object we get from action creators, we return objects of props.
7.  react-redux provides us a Provider component to connect store from whole app to redux.


Adding Store to Projects

import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: rootReducer,
});