import imgNote from "../cmps/img-note.cmp.js"
import txtNote from "../cmps/txt-note.cmp.js"
import videoNote from "../cmps/video-note.cmp.js"

export default {
  template: `
        <div  class="note-item">
            <img-note v-if="note.type === 'img'" :note="note"/>
            <txt-note v-else-if="note.type==='txt'" :note="note"/>
            <video-note v-else="note.type==='video'" :note="note"/>
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
    imgNote,
    txtNote,
    videoNote,
  },
}
