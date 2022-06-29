import noteItem from "./note-item.js";

export default {
props:['notes'],
 template: `        
 <section class="note-list">
    <ul>
            <li  v-for="note in notes" :key="note.id" class="note-items-container">
               <note-item :note="note"/>
            </li>
        </ul>
</section>
`,
data() {
return {};
},
created() {},
methods: {},
computed: {},
unmounted() {},
components: {
    noteItem
},
};