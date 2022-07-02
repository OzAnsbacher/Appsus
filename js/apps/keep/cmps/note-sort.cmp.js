
export default {
    template: `
        <section class="note-sort">
            <div class="sorters flex">
            <img class="new-note-icons" src="icons/sort-note.png" >
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