// increment() and decrement() are two action methods that change the state. 
// We will add them using dispatch in App.

export const increment = (number) => {
    return{
        type: 'INCREMENT',
        payload: number
    }    
};

export const decrement = (number) => {
    return {
        type: 'DECREMENT',
        payload: number
    }
}