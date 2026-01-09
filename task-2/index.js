const redux=require("redux")
const reduxLogger=require("redux-logger")

const createStore=redux.createStore
const logger=reduxLogger.createLogger()
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware

const BUY_CAKE="BUY_CAKE";
const BUY_ICECREAM="BUY_ICECREAM";

function buyCake(){
    return{
        type:BUY_CAKE
    }
}
function buyIceCream(){
    return{
        type:BUY_ICECREAM
    }
}

const initialCakeState={
    numofCakes:10
}
const initialIceCreamState={
    numofIceCreames:20
}

const cakeReducer=(state=initialCakeState ,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numofCakes:state.numofCakes-1
        }
        default:return state
    }
}

const iceCreamReducer=(state=initialIceCreamState ,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numofIceCreames:state.numofIceCreames-1
        }
        default:return state
    }
}

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store=createStore(rootReducer,applyMiddleware(logger))
console.log("Initial state:",store.getState());
const unSubscribe=store.subscribe(()=>{});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unSubscribe();

