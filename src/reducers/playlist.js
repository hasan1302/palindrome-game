
const initialState = [
    'Player One Words',
    'Player Two Words'
]



export function game(state = initialState, action) {
if (action.type === 'ADD_WORD') {
    return [
        ...state,
        action.payload
    ];
} else if (action.type === 'DELETE_WORD') {
    return state;
} 
return state;
}