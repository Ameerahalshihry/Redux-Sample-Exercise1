
const initState = {
    count : 0
}

const reducer = (state = initState , action ) => {
    if (action.type === 'INCREASE'){
        const sum = state.count + Number(action.val)
        // console.log(action.val)
        return { 
            count: sum }
    } else if (action.type === 'DECREASE'){
        return { count: state.count - 1 }
    }
    return state;
}

export default reducer