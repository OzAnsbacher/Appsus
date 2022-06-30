import noteService from "../services/note.service.js";
import noteList from "./note-list.js";
import addNew from "../cmps/add-new.cmp.js";
import pinnedNote from "../cmps/pinned-note.cmp.js";


export default {
props:[],

components:{
    noteList,
    addNew,
    pinnedNote,
},

 template: `
 <section class="note-app">
     <h2>this is note page</h2>
     <!-- <pre>{{notes}}</pre> -->
     <section class="note-main"  >
         <pinned-notes :notes="notes"></pinned-notes>
         <add-new :notes="notes" class="add-new" @add="addNote"></add-new> 
         <note-list :notes="notesToShow" @delet="deleteNote"/>
    </section>
 </section>
`,
data() {
return {
    notes:null,
    filterBy :null
    // {
    //     searchTxt:"",
    //     options: 'all'
    // },
};
},
created() {
    noteService.query().then(notes=>this.notes=notes)
},
methods: {
    addNote(newNote){
        console.log(newNote)
        newNote.then(note=>{
         this.notes.push(note)
            console.log(this.notes);
        })
    },

    deleteNote(noteId){
        console.log(noteId)
        noteService.removeFromNotes(noteId).then(notes=>this.notes=notes)
    },
    
},
computed: {
    notesToShow(){
        let notes =this.notes
        if(!this.filterBy) return notes
        //add filters later

    },
},
unmounted() {},
};