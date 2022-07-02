
export default {
    props: ['note'],
    template: `
    <section class="note-tools">
        <div v-if="isShowClrs" class="clr-picker">
            <div @click="emitChangeColor(color.code)" v-for="color in colors" :class="color.name" class="clr-circle"></div>
        </div>
        <div class="note-tools-btn">
            <img class="new-note-icons" src="icons/color-note.png"  @click.prevent="toggleClrs">
            <img class="new-note-icons" src="icons/pin-note.png"  @click="emitTogglePin">
            <img class="new-note-icons" src="icons/delet-note.png"  @click="emitDeletingNote">
            <img class="new-note-icons" src="icons/email-note.png" >
            <!-- <button class="color-btn" @click="toggleClrs">color</button> -->
            <!-- <button class="pin-btn" :note="note"  @click="emitTogglePin">pin</button> -->
            <!-- <button class="dlt-btn" @click="emitDeletingNote">delet</button> -->
            <!-- <button  class="email-btn">email</button> -->
        </div>
    </section>
    `,
    created() {

    },
    data() {
        return {
            isShowClrs: false,
            colors: [{ code: '#fdfdc4', name: 'yellow' }, { code: '#ccffec', name: 'turquoise' }, { code: '#d8bef3', name: 'purple' }]
        }
    },
    methods: {
        // emitChangeColor(color) {
        //     this.$emit('changedColor', color)
        // },
        emitDeletingNote() {
            this.$emit('deletedNote')
        },
        emitTogglePin() {
            this.$emit('toggledPin', this.note.id);
            // console.log(this.note.id)
            // console.log(this.note)
        },
    
        toggleClrs() {
            this.isShowClrs = !this.isShowClrs
        },
    },
    computed: {

        // isMailable() {
        //     return !(this.note.type === 'todo' || this.note.type === 'audio')
        // },
        // pinnedColor() {    
        //     console.log(this.note)
        //     return (this.note.isPinned)? 'unpinned' : 'pinned';
        // },
    },
}