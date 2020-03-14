
// const curFrame = (state = null, action) => {
//     switch (action.type) {
//         case ''
//     }
// }
import menuArr from "@public/menuArr.js"
const menus = (state = menuArr, action) => {
    return state;
}

const frames = (state = [], action) => {

    switch (action.type) {
        case 'ADD_FRAME':
            // action payload
            const frame = action.frame;
            console.log('此标签已存在', frame)
            const exist = state.some(item => item.id === frame.id);
            if (exist) {
                return [...state]
            }
            console.log('新增标签', frame)
            return [
                ...state,
                {
                    ...frame,
                    active: false
                }
            ]
        case 'REDUCE_FRAME':
            let arr = [...state];
            const index = arr.findIndex(i => (i.id == action.id));
            arr.splice(index, 1)
            return arr;

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