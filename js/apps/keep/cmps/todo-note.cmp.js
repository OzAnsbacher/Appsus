
import {utilService} from '../../../services/util.service.js';
import todoItem from './todo-item.cmp.js';
import noteService from '../services/note.service.js';

export default {
    template: `
        <section>
                <p>Add a checklist</p>
                <form @submit.prevent="emitContent" >
                    <input type="text" v-model="newTodo.text" />
                    <button class="s-round-btn" @click="addTodo">+</button>
                </form>
                <ul>
                    <todo-item @deletingTodo="deleteTodo" @isDoneChanged="changeIsDone" v-for="currTodo in todos" :todo="currTodo" :key="currTodo.id"></todo-item>
                </ul>
        </section>
    `, 

    data() {
        return {
            todos: [],
            newTodo: { text: '', isDone: false, id: '' }
        }
    },
    props: ['note.data'],
    methods: {
        addTodo() {
            this.newTodo.id = utilService._makeId();
            this.todos.push(this.newTodo);
            this.newTodo = { text: '', isDone: false, id: '' };
        },
        deleteTodo(todoId) {
            const todoIdx = this.todos.findIndex(todo => todo.id === todoId);
            this.todos.splice(todoIdx, 1);
        },
        emitContent() {
            this.$emit('newTodosChanged', this.todos);            
        },
        changeIsDone(todoId) {
            const todoIdx = this.todos.findIndex(todo => todo.id === todoId);
            this.todos[todoIdx].isDone = !this.todos[todoIdx].isDone;
        }

    },
    created() {

    },
    components: {
        todoItem,
        noteService
    }

}