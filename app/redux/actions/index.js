
let frameId = 0
export const addFrame = frame => ({
    type: 'ADD_FRAME',
    frame
})
export const reduceFrame = id => ({
    type: 'REDUCE_FRAME',
    id
})