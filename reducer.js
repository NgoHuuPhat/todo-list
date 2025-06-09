import storage from "./util/storage.js"

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true, //Hiển thị về lại tất cả thì callback sẽ trả về true
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editIndex: null
}
const actions = {
    //Vì trong JS là tham chiếu nên cũng không nhất thiết phải trả về 1 state mới 
    add({ todos }, title){
        if(title){
            todos.push({title, completed: false})
            storage.set(todos)
        }
    },
    toggle({ todos }, index){
        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)

    },
    toggleAll({ todos }, completed){
        todos.forEach((todo)=>{
            todo.completed = completed
            storage.set(todos)
        })
    },
    destroy({ todos }, index){
        todos.splice(index, 1)
        storage.set(todos)
    },
    switchFilter(state, filter){
        state.filter = filter
    },
    clearComplete(state){
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    startEdit(state, index){
        state.editIndex = index
    },
    endEdit(state, title){
        if(state.editIndex !== null){
            if(title){
                state.todos[state.editIndex].title = title
            }
            else{
                this.destroy(state, state.editIndex)
            }
            state.editIndex = null
            storage.set(state.todos)
        }
    },
    cancelEdit(state){
        state.editIndex = null
    }
}

export default function reducer(state = init, action, agrs){ //[1,2]
    //Nếu action = 'add' => actions['acc'] == true => Nó sẽ chạy hàm app ở trong actions (Tư duy dùng action có tên giống với method)
    actions[action] && actions[action](state, ...agrs) //1, 2
    return state
}

