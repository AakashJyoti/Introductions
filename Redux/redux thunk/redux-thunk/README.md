--- Redux Thunk ---

npm install redux-thunk

1.  Thunk are functions which are used to delay a functionality
2.  actions are by default synchronous
3.  to have asynchronus action, we can wrap it in a thunk function

Adding Thunk to Store

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

Changes in action creator :-

fetchProducts(){
    // dispatch will be called by redux thunk middleware
    return (dispatch, getState){
        fetch("api-url").then(res => res.json()).then(data+>{
            dispatch(setProducts(data))
        })
    }
}