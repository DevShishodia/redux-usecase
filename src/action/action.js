import store from "../ReduxStore/store";
const action = (userData) => {

store.dispatch({
    type:"NAME",
    payload:userData
})
}

export default action ;