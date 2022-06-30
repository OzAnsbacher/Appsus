import noteService from "../services/note.service.js";
import noteList from "./note-list.js";
import addNew from "../cmps/add-new.cmp.js";


export default {
props:[],

components:{
    noteList,
    addNew,
},

 template: `
 <section class="note-app">
     <h2>this is note page</h2>
     <!-- <pre>{{notes}}</pre> -->
     <section class="note-main"  >
         <!-- <pinned-notes :notes="not\notifications.htmles"></pinned-notes> -->
         <add-new :notes="notes" class="add-new"></add-new> 
         <note-list :notes="notesToShow" />
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