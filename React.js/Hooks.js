
// 			useState Hook:-

// react has states of elements
// so we can grab value as a state of a element and use or update it
// state = ui+ variables,  everything
// eg:-
// 	import {useState} from "react"
	
// 	const [counter, setCounter] = useState(0);

// 	const  incremant =()=>{
// 	setCounter(counter+1);
// 	};
	
// 	return(
// 	(counter)
// 	 <button onClick={increment}> increment </button>	
// 	)


// 			useReducer Hook:-

// call muliple state of same object at same instance
// eg:-
// 	cosnt reducer =(state, action)=>{
// 		switch(action.type){
// 		case "INCREMENT":
// 			return{count: state.count+1, 
// 				showText: state.showText}
// 		case "toggleShowText":
// 			return {count: state.count,
// 				showText: !state.showText}
// 		default:
// 			return state;
// 		}}
	
// 	const [state, dispatch] = useReducer(reducer, 
// 		{count: 0, showText: true});
		
// 	return (
// 	<button onClick={()=>{
// 		dispatch({type: "INCREMENT"}
// 		dispatch({type: "toggleShowText"})}>
// 	(state.count)
// 	(state.showText)
// 	</button>
// 	)


// 			useEffect Hook:-

// function is a fuction which is used to call data when page renders best for API calls 
// eg:-  
// 	useEffect(()=>{
// 	console.log("Hekko")
// 	},[])


// 			useRef Hook:-

// white taking an action it used to foccus it on an inout or naother funtion to apply 
// eg:-
// 	const inputRef = useRef(null);
// 	const onClick = () =>{ 
// 	inputRef.current.focus();
// 	console.log(inputRef.current.vlaue)
// 	}

// 	return(
// 	<>
// 	  <input type="text" ref={inputRef} />
// 	  <button onClick={onClick}>Change</button>
// 	</>
// 	)

// 			useLayoutEffect:-

// it is called earlier stage of page rendering then useEffect 
// eg:-
// 	useLayoutEffect(()=>{
// 	console.log("Jabba")
// 	},[])


// 			UseImperativeHandle:-

// its required to pass state from child to paerent
// eg:- 
// 		parent componet

// 	const buttonRef = useRef(null);

// 	return(
// 	<button onClick=(()=>{buttonRef.current.alterToggle()})>
// 	<Button ref={buttonRef}/>
// 	</button>
// 	)
		
// 		child component

// 	const [toggle, setToggle] = useState(false);

// 	useImperetiveHandle(ref, () =>({
// 	alterToggle(){
// 	setToggle(!toggle)
// 	}
// 	}))

// 	const Button = forwardRef(( props, ref) =>{
// 	return(
// 	<button>
// 	Button foor child
// 	</button>
// 	)})


			
// 			useContext Hook:-

// setting state form childComponent1 for state of childComponent2
// eg:-
// 		parent component		

// 	import { createContext } from "react";

// 	export const AppContext = createContext(null);
// 	const [username, setUsername] = useState("")

// 	return(
// 	<AppContext.Provider  value=({username, setUsername})>
// 	<Login />
// 	<User />
// 	</AppContext.Provider>
// 	)

// 		child component1

// 	import {useContext} from "react";
// 	import {AppContext} from "./ParentComponent"

// 	const {username} = useContext(AppContext)


// 		child component2

// 	import {useContext} from "react";
// 	import {AppContext} from "./ParentComponent"

// 	const {setUsername} = useContext(AppContext)
	

// 			useMemo Hook:-

// it is used to compute perticular funtion for perticular action insted of compute whole file
// it runs the perticular funtion ony when dependency is affected
// eg:-
// 	const getLongestName = useMemo(()=>findLongestName(data),
// 	[data])

// 	return(
// 	<div>{getLongestName}</div>
// 	)


// 			useCallback Hook:-
	
// same as useMemo hook but this time fuction is present in child componentand hook used in parent component
// eg:- 
// 		parent component

// 	const returnComment = useCallback((name)=>{
// 		return data= name}, [data]) 
	
// 		child component
	
// 	return (
// 	<div>{returnComment("jabba")}</div>
// 	)
