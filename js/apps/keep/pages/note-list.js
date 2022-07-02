import noteItem from "./note-item.js"
import noteTools from "../cmps/note-tools.cmp.js"
import noteService from "../services/note.service.js"
import { utilService } from "../../../services/util.service.js"


export default {
  props: ['notes'],
  template: `        
 <section class="note-list">
    <ul>
        <div v-for="note in notes" :key="note.id" class="note-items-container">
             <note-item :note="note" />
             <note-tools :note="note" @toggledPin="togglePin"  @deletedNote="deleteNote(note.id)"/>
        </div>
    </ul>
</section>
`,
  data() {
    return {
      
    }
  },
  created() {
    
  },
  methods: {
    togglePin(noteId) {
        noteService.togglePin(noteId)
      },
      deleteNote(noteId) {
        // console.log(noteId)
        this.$emit('delet',noteId)
        // noteService.removeFromNotes(noteId).then(notes=>this.notes=notes)
        
        // this.notes=this.notes.filter(note => 
        //   note.id !== noteId
        // );
        // this.notes = noteService.removeFromNotes(noteId)
        // console.log(noteAfterDelet)


        // console.log(this.notes)
        // console.log(handler.get(this.notes))

        // handler.get(this.notes)
        // this.notes = noteAfterDelet
        
        },
  },
  computed: {},
  unmounted() {},
  components: {
    noteItem,
    noteTools
  },
}
