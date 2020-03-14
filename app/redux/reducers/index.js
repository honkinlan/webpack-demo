
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
            let frame = action.frame;
            frame.isActive = true
            for(let i of state) {
                if(i.id !== frame.id){
                    i.isActive = false;
                }
            }
            const exist = state.some(item => item.id === frame.id);
            if (exist) {
                return [...state]
            }
            console.log('新增标签', frame)
            console.log([
                ...state,
                frame
            ])
            return [
                ...state,
                frame
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