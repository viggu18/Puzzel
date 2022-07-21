
const initialState = {
    user : null,
    phone: {
    }
}

export const AppReducer = (state = initialState, action) => {
    console.log('switch')
    switch(action.type) {
        case 'USER':
            return {
                ...state,
                user: action.payload,
            }
        case 'customPhone': 
            console.log(action.payload)
            return {
                ...state, 
                [action.payload.key]: action.payload.value
            }
        default:
            console.log(state)
            return state;
    }
}

