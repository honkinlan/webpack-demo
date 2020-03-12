
const frames = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FRAME':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'SWITCH_FRAME':
            return state.map(frame =>
                (frame.id === action.id)
                    ? { ...frame, active: true }
                    : { ...frame, active: false }
            )
        default:
            return state
    }
}

export default function appStore(state = {}, action) {
    return {
        frames: frames(state.frames, action)
    }
}