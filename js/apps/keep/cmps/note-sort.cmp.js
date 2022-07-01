
export default {
    template: `
        <section class="app-sort">
            <div class="sorters">
                <select v-model="sortBy.by">
                    <option>Date</option>
                    <option>Type</option>
                </select>
                <select v-model="sortBy.optsion">
                    <option>+</option>
                    <option>-</option>
                </select>
            </div>
        </section>
    `,

    data() {
        return {
            sortBy: {by: 'Date', optsion: '-'}
        }
    },

    watch: { 
        'sortBy': {
            handler: function(sorter) {
                this.$emit('sorted', {by: sorter.by.toLowerCase(), optsion: sorter.optsion});
           },
           immediate: true,
           deep: true
         },
   },


}