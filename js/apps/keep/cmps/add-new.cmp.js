import noteService from "../services/note.service.js";
import txtNote from "../cmps/txt-note.cmp.js"
import imgNote from "./img-note.cmp.js";
import videoNote from "./video-note.cmp.js";

export default {
    template: `
    <section class="new-note-editor" >
        <form class="new-note-form" action="#" @submit.prevent="addNewNote">
            <h1>Make a new note </h1>
        <div class="type-btns">
            <button class="text-note-btn" @click.prevent="setType('txt')">text note</button>
            <button class="img-note-btn" @click.prevent="setType('img')">img note</button>
            <button class="video-note-btn" @click.prevent="setType('video')">video note</button>
            
        </div>

        <div class="new-notes-types">
            <txt-note :note="this.note" @addNewNote="addNewNote" @dataChanged="dataContent" v-if="note.type === 'txt'"></txt-note>
            <img-note @imgNoteChanged="dataContent" v-else-if="note.type === 'img'"></img-note>
            <video-note @videoNoteChanged="dataContent" v-else-if="note.type === 'video'"></video-note>
        </div>
            
            <div class="new-note-tools">
                <button @click.prevent="toggleClrs" class="color-btn">set color</button>
                <button class="pin-btn" @click.prevent="togglePin">pin</button>
                <button type="submit" class="submit-btn">submit</button>
                <div v-if="isShowClrs">
                    <input type="button" class="clr-yellow" @click="setClr"/>
                    <input type="button" class="clr-purple" @click="setClr"/>
                    <input type="button" class="clr-turquoise" @click="setClr"/>
                </div>
            </div>
        </form>
    </section>
    `,
    data() {
        return {
            isShowClrs: false,
            note: {
                type: 'txt',
                color: '#fdfdc4',
                data: '',
                date: '',
                isPinned: false
            }
        }
    },
    methods: {
        setClr(ev) {
            if (ev.target.classList.contains('yellow')) this.note.color = '#fdfdc4';
            if (ev.target.classList.contains('purple')) this.note.color = '#d8bef3';
            if (ev.target.classList.contains('turquoise')) this.note.color = '#ccffec';
        },
        addNewNote() {
            noteService.addNote(this.note.type, this.note.color, this.note.content, this.note.isPinned);
             },
        setType(val) {
            this.note.type = val;
        },
        dataContent(data) {
            this.note.data = data;
        },
        togglePin() {
            this.note.isPinned = !this.note.isPinned;
        },
        toggleClrs() {
            this.isShowClrs = !this.isShowClrs
        },
        renderNotes(){
            noteService.query().then(notes=>this.notes=notes)
        }
    },
    computed: {
    },
    components: {
        noteService,
        txtNote,
        imgNote,
        videoNote,

        
    }
}