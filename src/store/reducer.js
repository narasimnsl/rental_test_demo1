const initialState = {
    /*DefaultValue*/
    id_val:''

}

const reducer = (state = initialState, action) => {
    
    if(action.type === "UPDATE_ID"){
        const newState = {id_val:action.value}
        return newState;
    }
    return state;
};

export default reducer;