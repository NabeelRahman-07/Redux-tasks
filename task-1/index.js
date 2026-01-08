const redux=require("redux")
const createStore=redux.createStore

const BUY_CAKE="BUY_CAKE";

function buyCake(){
    return{
        type:BUY_CAKE
    }
}

const initialState={
    numofCakes:10
}

const reducer=(state=initialState ,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numofCakes:state.numofCakes-1
        }
        default:return initialState
    }
}

const store=createStore(reducer)
console.log("Initial state:",store.getState());
const unSubscribe=store.subscribe(()=>console.log("UPdated state:",store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unSubscribe();

