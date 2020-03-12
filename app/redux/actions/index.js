
let frameId = 0
export const addFrame = text => ({
    type: 'ADD_FRAME',
    id: frameId++,
    text
})