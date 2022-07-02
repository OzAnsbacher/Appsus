export default {
    template: `
        <section class="note-filter">
        <img class="new-note-icons" src="icons/filter-note.png" >
        <select v-model="filterBy">
                <option>All</option>
                <option>Text</option>
                <option>Todos</option>
                <option>Image</option>
                <option>Video</option>
            </select>
        </section>
    `,

    props: [''],

    data() {
        return {
            filterBy: 'All'
        }
    },

    watch: { 
        'filterBy': {
            handler: function(filter) {
                this.$emit('filtered',filter.toLowerCase());
           },
           immediate: true
         },
   },


}