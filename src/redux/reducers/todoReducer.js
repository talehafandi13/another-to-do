const init = JSON.parse(localStorage.getItem('List')) || [];


export function todoReducer(state = init, action) {

    switch (action.type) {

        case 'ADD':
            return action.payload;
        case 'DELETE':
            return action.payload;
        case 'CLEAR':
            return action.payload;

    
        default:
            break;
    }


    return state;
}