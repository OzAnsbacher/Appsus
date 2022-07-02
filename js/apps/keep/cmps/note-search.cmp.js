export default {
    template: `
        <section class="note-search">
                <input @keyup.enter="emitSearch" type="text" v-model="searchParam" placeholder="Search inside notes"/>
                <button @click="emitSearch" class="btn fa-solid fa-arrow-rotate-right ">
                </button>
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
