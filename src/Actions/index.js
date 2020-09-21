// increment() and decrement() are two action methods that change the state. 
// We will add them using dispatch in App.

export const increment = () => {
    return{
        type: 'INCREMENT'
    }    
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}