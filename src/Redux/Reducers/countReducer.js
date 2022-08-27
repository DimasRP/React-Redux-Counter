import TYPES from "../type"

const initialState = {
    total: 0
}

const countReducer = (state = initialState, action) =>{
    switch (action.type) {
        case TYPES.INCREMENT:
            return{
                ...state,
                total: state.total +1
            }
        case TYPES.DECREMENT:
            return{
                ...state,
                total: state.total -1
            }    
        case TYPES.RESET:
            return{
                ...state,
                total: 0
            }
        
        default:
            return state
    }
}

export default countReducer