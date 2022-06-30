import { utilService } from "../../../services/util.service.js";
import mailPreview from "./mail-preview.cmp.js";
import mailCompose from "./mail-compose.cmp.js";

export default {
    props: ["mails"],
    template: `
    <router-link to="/mail"><button>Inbox</button></router-link>
    <router-link to="/mail/compose"><button>Compose</button></router-link>
    <router-link to="/mail/send"><button>Sent</button></router-link>
    
    <section>
        <p><span>unread:</span>{{getCountUnread}}</p>
        <ul>
            <li class="li-mail" v-for="mail in mails" :key="mail.id" >
                <mail-preview :mail="mail" @changeIsRead="onchangeIsRead"/>
            </li>
        </ul>
    </section>
        `,
    components: {
        mailPreview,
        mailCompose
    },
    data() {
        return {
            // pageMode: {
            //     iscompose: null,
            //     isInbox: true,
            //     isSent: null,
            // },
        };
    },
    created() {


    },
    methods: {
        onchangeIsRead(idx) {
            this.mails.some(mail => {
                if (mail.id === idx) {
                    console.log(mail.isRead);
                    mail.isRead = false
                    console.log(mail.isRead);
                    return true
                } else return false
            })
            utilService._save('mailDB', this.mails)
        },
        // onPageMode(mode) {
        //     for (const key in this.pageMode) {
        //         this.pageMode[key] = null
        //     }
        //     this.pageMode[mode]=true
        // },

    },
    computed: {
        // debugger
        getCountUnread() {
            let count = 0
            this.mails?.forEach(mail => {
                if (mail.isRead) count++
            })
            return count
        },

    },
    unmounted() { },
};