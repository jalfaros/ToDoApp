

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]

const todoReducer = (state = initialState, action) => {
    
    if( action?.type === 'add' ){
        return [... state, action.payload]
    }
    
    return state;
}

let todo = todoReducer();

const newTodo = {

    id: 2,
    todo: 'Comprar Iphone X',
    done: false
}

const action = {
    type: 'add',
    payload: newTodo
}

todo = todoReducer(todo, action);


console.log(todo)