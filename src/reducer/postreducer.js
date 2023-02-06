export const InitialState = {
    loading: false,
    article: [],
}

const articleReducer = (state = InitialState,action) =>{
    switch(action.type){
        case "GET_ARTICLE":
            return{
                ...state,
                article: action.payload,
            }
        case "LOADING":
            return{
                ...state,
                loading: action.status,
            }
        default:
            return state
    }
}

export default articleReducer;

// 4035 6210 9325 4005
// jan 2030
// 858