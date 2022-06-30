import {videoService} from '../../keep/services/videos-service.js'


// not workin chang to onle url not search
export default {
    template: `
        <section>
            <form>
                <input @keyup.enter.prevent="updateVideoList" v-model="videoSearchParam" type="text" placeholder="Search for Videos"/>
                <button class="search-btn" @click="updateVideoList">search</button>
            </form>
        
            
            <div v-if="videoList" class="videos-container">
                <h1>Search results:</h1>

                <ul class="videos-list">
                    <li v-for="video in videoList" @click="pickVideo(video.id.videoId)">
                    {{video.snippet.title}}
                    </li>
                </ul>
            </div>

            <div v-if="videoId" class="displayDiv">
                <iframe class="watch" width=80% height=80% :src="urlToSrc"></iframe>    
            </div>

        </section>

    `,
    
    props: ['note'],
    
    data() {
        return {
            videoId: '',
            videoList: [],
            videoSearchParam: ''

        }
    }, 

    computed: {
        urlToSrc() {
          return `https://www.youtube.com/embed/${this.videoId}`;  
        } 
    },

    methods: {
        updateVideoList() {
            videoService.getVideos(this.videoSearchParam)
            .then((res) => {
                this.videoList = res;
            })
        },

        pickVideo(videoId) {
            this.videoId = videoId;
        },
    }, 

    watch: {
        'urlToSrc': function() {
            this.$emit('videoNoteChanged',this.urlToSrc);
        },   
    }
}