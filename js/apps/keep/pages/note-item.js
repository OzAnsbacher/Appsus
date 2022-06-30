import imgNoteDisplay from "../cmps/img-note-display.cmp.js"
import txtNoteDisplay from "../cmps/txt-note-display.cmp.js"
import videoNoteDisplay from "../cmps/video-note-display.cmp.js"

export default {
  template: `
        <div  class="note-item">
            <img-note-display v-if="note.type === 'img'" :note="note"/>
            <txt-note-display v-else-if="note.type==='txt'" :note="note"/>
            <video-note-display v-else="note.type==='video'" :note="note"/>
            <button>here will be a action bar</button>
            <button>here will be a somting alse</button>
        </div>
    `,
  created() {},
  data() {
    return {}
  },

  methods: {},

  computed: {},
  props: ["note"],
  components: {
    imgNoteDisplay,
    txtNoteDisplay,
    videoNoteDisplay,
  },
}
