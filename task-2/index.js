const redux=require("redux")
const createStore=redux.createStore
const combineReducers=redux.combineReducers

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

const store=createStore(rootReducer)
console.log("Initial state:",store.getState());
const unSubscribe=store.subscribe(()=>console.log("UPdated state:",store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unSubscribe();

