export default {
    template: `
        <section>
            <input @keyup.enter="emitAddNote" type="text" placeholder="Write away..." v-model="text" @change="emitData"/>
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
            this.text = '';

        }
    }

}