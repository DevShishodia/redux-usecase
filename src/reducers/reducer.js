
const reducer = (state  = {name:""}, action) => {
              
    switch(action.type) {
        case "NAME" :
            state={
                ...state,
                name:action.payload
            }
            break;

        default:
            break;
    }

   return state ;
}

export default reducer ;