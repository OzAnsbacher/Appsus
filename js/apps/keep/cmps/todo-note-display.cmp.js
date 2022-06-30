
import todoItem from './todo-item.cmp.js';
import noteService from '../services/note.service.js';


export default {
    template: `
    <ul>
        <todo-item @deletingTodo="deleteTodo" @isDoneChanged="changeIsDone"
             v-for="currTodo in note.content"
        :todo="currTodo" :key="currTodo.id"></todo-item>
    </ul>
    `,
    props: ['note'],
    created() {

    },
    methods: {
        deleteTodo(todoId) {
            noteService.deleteTodo(todoId, this.note.id)  
        },
        changeIsDone(todoId) {
            noteService.changeIsDone(todoId, this.note.id)
        },
    },
    components: {
        todoItem
    }
}