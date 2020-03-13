
let frameId = 0
export const addFrame = url => ({
    type: 'ADD_FRAME',
    id: frameId++,
    url
})