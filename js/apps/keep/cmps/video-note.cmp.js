import {videoService} from '../../keep/services/videos-service.js'


// not workin chang to onle url not search
export default {
    template: `
        <section>
            <form>
                <input v-model="videoUrl" type="text" placeholder="Enter video Url"/>
                <pre>{{videoUrl}}</pre>
            </form>

            <div class="displayDiv">
                <iframe  :src="videoUrl"></iframe>    
            </div>

        </section>

    `,
    
    props: ['note'],
    
    data() {
        return {
            videoUrl:''

        }
    }, 

    computed: {
    },

    methods: {
    }, 

    watch: {
        'urlToSrc': function() {
            this.$emit('videoNoteChanged',this.urlToSrc);
        },   
    }
}