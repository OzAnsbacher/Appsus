export default {
    template: `
        <section class="app-search">
            <input @keyup.enter="emitSearch" type="text" v-model="searchParam" placeholder="Search inside notes"/>
            <button @click="emitSearch"> reset search</button>
        </section>
    `,
    data() {
        return {
            searchParam: ''
        }
    },

    methods: {
        emitSearch() {
            this.$emit('searchBy',this.searchParam);
            this.searchParam = '';
        },

        emitClearSearchs() {
            this.$emit('clearSearch',this.searchParam);
        }
    }
}
