import noteService from "../services/note.service.js";
import noteList from "./note-list.js";
import addNew from "../cmps/add-new.cmp.js";
import pinnedNote from "../cmps/pinned-note.cmp.js";
import noteSearchSort from "../cmps/note-search-sort.cmo.js";



export default {
props:[],

components:{
    noteList,
    addNew,
    pinnedNote,
    noteSearchSort,
},

 template: `
 <section class="note-app">
     <h2>this is note page</h2>
     <note-search-sort @clearSearch="clearSearch" @searchBy="searchNotes" @filtered="filterNotes" @sortedBy="sortNotes"/>

     <section class="note-main"  >
        
         <add-new :notes="notes" class="add-new" @add="addNote"></add-new> 
         <note-list :notes="notes" @delet="deleteNote"/>
    </section>
 </section>
`,
data() {
return {
    notes:null,
    filterAndSortParams: {
        searchParam: '',
        filter: 'all',
        sort: {by: 'date', op: '-'}
    }
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
    clearSearch() {
        this.filterAndSortParams.searchParam = '';
        noteService.querySearchSort()
        .then((notes) => {this.notes = notes})
    },
    searchNotes(searchParam) {
        this.filterAndSortParams.searchParam = searchParam;
        // console.log(this.filterAndSortParams.searchParam)
        this.updateNotes();
    },
    updateNotes() {
        noteService.querySearchSort(this.filterAndSortParams)
        .then((notes) => {
        this.notes = notes}
        )
            
    },
    filterNotes(filter) {
        let filterToSend
        switch (filter) {
            case 'text': 
                filterToSend = 'txt';
                break;
            case 'image': 
                filterToSend = 'img';
                break;
            case 'todos': 
                filterToSend = 'todo';
                break;
            case 'video': 
                filterToSend = 'video';
                break;
        }
        this.filterAndSortParams.filter = filterToSend;
        this.updateNotes();
    },
    sortNotes(sorter) {
        // console.log(sorter)
        this.filterAndSortParams.sort = sorter;
        // console.log(this.filterAndSortParams.sort)
        this.updateNotes();
    },
    
},
computed: {
    // notesToShow(){
    //     let notes =this.notes
    //     if(!this.filterBy) return notes
    //     //add filters later

    // },
},
unmounted() {},
};