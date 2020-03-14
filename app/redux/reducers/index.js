
// const curFrame = (state = null, action) => {
//     switch (action.type) {
//         case ''
//     }
// }
import menuArr from "@public/menuArr.js"
const menus = (state = menuArr, action) => {
    return state
}

const frames = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FRAME':
            console.log('add')
            const exist = state.some(item => item.url === action.url);
            if(exist){
                return [...state]
            }
            console.log([
                ...state,
                {
                    id: action.id,
                    url: action.url,
                    active: false
                }
            ])
            return [
                ...state,
                {
                    id: action.id,
                    url: action.url,
                    active: false
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
        frames: frames(state.frames, action),
        menus: menus(state.menus, action)
    }
}