

export default {
    props: ['note'],
    template: `
        <section class="img-note">
            <img  :src="note.data" alt="Can't get your image" class="img">
        </section> 
    `,
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    },
    computed: {
        },


    mounted() {
      
    },
    components: {
    }

}