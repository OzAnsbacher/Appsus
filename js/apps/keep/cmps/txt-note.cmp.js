export default {
    template: `
        <section class="new-notes">
            <input @keyup.enter="emitAddNote" type="text" placeholder="Write away..." v-model="text" @change="emitData"/>
            <pre>{{text}}</pre>
        </section>
    `,
    data() {
        return {
            text: ''
        }
    },
    props: [],
    created() {

    },
    methods: {
        emitData() {
            this.$emit('dataChanged', this.text);
        },

        emitAddNote() {
            this.$emit('addNewNote', this.text);
            // this.text = '';
        }
    }

}