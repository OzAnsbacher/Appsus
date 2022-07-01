export default {
    template: `
        <section class="app-filter">
        filterBy<select v-model="filterBy">
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