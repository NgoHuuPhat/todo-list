export default function logger(reducer){
    return (prevState, action, agrs) => {
        console.group(action)
        console.log('prevState: ', prevState)
        console.log('Action arguments: ', agrs)
        const nextState = reducer(prevState, action, agrs)
        console.log('nextState: ', nextState)
        console.groupEnd()
        return nextState
    }
}