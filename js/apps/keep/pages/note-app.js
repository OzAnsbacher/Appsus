import noteService from "../services/note.service.js"
import noteList from "./note-list.js"
import addNew from "../cmps/add-new.cmp.js"
import pinnedNote from "../cmps/pinned-note.cmp.js"
import noteSearchSort from "../cmps/note-search-sort.cmo.js"

export default {
  props: [],

  components: {
    noteList,
    addNew,
    pinnedNote,
    noteSearchSort,
  },

  template: `
 <section class="note-app">
     <h2>welcome to your note page</h2>
     <div class="note-search-sort"> 
         <note-search-sort  
         @clearSearch="clearSearch" 
         @searchBy="searchNotes" 
         @filtered="filterNotes" 
         @sortedBy="sortNotes"/>
     </div>

     <div class="note-main"  >
         <pinned-note :notes="notes"></pinned-note>
         <add-new :notes="notes" class="add-new" @add="addedNote"></add-new> 
         <note-list :notes="notes" @delet="deleteNote"/>
    </div>
 </section>
`,
  data() {
    return {
      notes: [],
      filterAndSortParams: {
        searchParam: "",
        filter: "all",
        sort: { by: "date", option: "-" },
      },
    }
  },
  created() {
    noteService.query().then((notes) => (this.notes = notes))
  },
  methods: {
    addedNote(newNote) {
      console.log(newNote)
      console.log(this.notes)
      // this.notes.push(newNote)
      // this.updateNotes();
      newNote.then(note=>{
       this.notes.push(note)})
      //     console.log(this.notes);
      // })
    },
    deleteNote(noteId) {
      console.log(noteId)
      noteService.removeFromNotes(noteId).then((notes) => (this.notes = notes))
    },
    clearSearch() {
      this.filterAndSortParams.searchParam = ""
      noteService.querySearchSort().then((notes) => {
        this.notes = notes
      })
    },
    searchNotes(searchParam) {
      this.filterAndSortParams.searchParam = searchParam
      // console.log(this.filterAndSortParams.searchParam)
      this.updateNotes()
    },
    updateNotes() {
      // console.log("befor", this.notes)
      // console.log("from update", sort)
      noteService.querySearchSort(this.filterAndSortParams)
      .then((notes) => {
        this.notes = notes
      })
      // console.log("after", this.notes)
    },
    filterNotes(filter) {
      let filterToSend
      switch (filter) {
        case "text":
          filterToSend = "txt"
          break
        case "image":
          filterToSend = "img"
          break
        case "todos":
          filterToSend = "todo"
          break
        case "video":
          filterToSend = "video"
          break
      }
      this.filterAndSortParams.filter = filterToSend
      this.updateNotes()
    },
    sortNotes(sorter) {
      this.filterAndSortParams.sort = sorter
      this.updateNotes()
    },
  },
  computed: {
    },
  unmounted() {},
}
