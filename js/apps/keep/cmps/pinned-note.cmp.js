import noteItem from "../pages/note-item.js";

export default {
    template: `
    <section>
        <ul class="pinned-notes">
            <note-item v-if="currNote.isPinned" v-for="currNote in pinnedNotes" :note="currNote" :key="currNote.id"></note-item> >  
        </ul>

    </section>
    `,

    data() {
        return {
            pinnedNotes: this.sendPinnedNotes
        }
    },
    created() {
        
    },

    computed: {
        sendPinnedNotes() {
            let res = this.notes.filter(note => note.isPinned);
            console.log(res)
            return res;
        }
    },
    props: ['notes'],
    methods: {
        
    },

    components: {
        noteItem
    },

    watch: {
        'notes': function (newNotes) {
            this.pinnedNotes = newNotes;
        }
    }
}