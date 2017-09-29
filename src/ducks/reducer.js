export function search(input){
    return {
        search: '',
        ytvideo: []
    };
}

export function signUpForCreditCard() {
    return {
        type: 'SIGNUP_FOR_CREDIT_CARD'
    };
}

const initialState = {
    search: '',
    ytvideo: [],

};


export default function reducer(state = initialState, action){
    switch (action.type) {
        case 'SEARCH':
        const name = action.payload
    

    return Object.assign({}, state, {search: name});
    case 'SIGN_UP_FOR_CREDIT_CARD':
        return Object.assign({}, {ytvideo: []})
        default:
        return state;
    }
}
