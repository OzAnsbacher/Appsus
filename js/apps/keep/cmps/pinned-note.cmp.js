import noteItem from "../pages/note-item.js";
import noteList from "../pages/note-list.js";
import noteService from "../services/note.service.js";
export default {
    template: `
    <section>
        <ul class="pinned-notes" ></ul>
        <h3 :pinnedNotes="sendPinnedNotes">pinndet note</h3>
        <note-list :notes="pinnedNotes" />
        <!-- <h3>pin section</h3> -->
    </section>
    `,

    data() {
        return {
            pinnedNotes: null
        }
    },
    created() {
        
        
    },

    computed: {
        sendPinnedNotes()
         {
            console.log('hiiii')
            let res = this.notes.filter(note => note.isPinned);
            console.log('pinned',res)
            this.pinnedNotes=res
            

            return res;
        }
    },
    props: ['notes'],
    methods: {
        
    },

    components: {
        noteItem,
        noteList,
        noteService
        
    },

    watch: {
        // 'notes': function (newNotes) {
        //     this.pinnedNotes = newNotes;
        // }
    }
}