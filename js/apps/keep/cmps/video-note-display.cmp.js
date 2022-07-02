export default {
    props: ['note'],
    template: `
        <section class="video-note">
           
            <iframe  src="note.data" class="video" frameborder="0" allowfullscreen></iframe>
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