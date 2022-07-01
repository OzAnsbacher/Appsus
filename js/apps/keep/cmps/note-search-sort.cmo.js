import noteSearch from "./note-search.cmp.js";
import noteFilter from "./note.filter.cmp.js";
import noteSort from "./note-sort.cmp.js";

export default {
props:[],
 template: `
 <div class="app-searchAndFilter">
    <h2> search and sort </h2>
            <note-search @searchBy="emitSearchBy" @clearSearch="emitClear"></note-search>
            <note-filter @filtered="emitFilterBy"></note-filter>
            <note-sort @sorted="emitSortBy"></note-sort>
</div>
`,
data() {
return {};
},
created() {},
methods: {
    emitSearchBy(searchParam) {
        this.$emit('searchBy',searchParam);
    },
    emitClear() {
        this.$emit('clearSearch','');
    },
    emitFilterBy(filter)  {
        // console.log('filter',filter)
        this.$emit('filtered',filter);
    },
    emitSortBy(sorter)  {
        // console.log(sorter)
        this.$emit('sortedBy',sorter);
    },
},
components: {
    
    noteSearch,
    noteFilter,
    noteSort,
},
computed: {},
unmounted() {},
};