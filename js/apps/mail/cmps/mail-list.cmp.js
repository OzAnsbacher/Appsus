import { utilService } from "../../../services/util.service.js";
import mailPreview from "./mail-preview.cmp.js";
import mailCompose from "./mail-compose.cmp.js";

export default {
    props: ["mails"],
    template: `
    <div class="header-mail-main flex space-between">
        <section class="inpox-filters">
            <input type="search" class="search-inbox" placeholder="search">
            <select class="inbox-filter" id="">
                <option value=""></option>
                <option value="">Unread</option>
                <option value="">Read</option>
            </select>
            <select class="inbox-filter" id="">
                <option value="">Time</option>
                <option value="">Name</option>
            </select>
        </section>
    <div class="img-unread"><div class="count-unread">{{getCountUnread}}</div></div>
</div>

    <div class="mail-list-conteiner flex">
    <div class="nav-mail flex">
        <router-link to="/mail"><img class="btn-nav-mail" src="../../../icons/inboxmail.png" alt=""></router-link>
        <router-link to="/mail/compose"><img class="btn-nav-mail" src="../../../icons/newmail.png" alt=""></router-link>
        <router-link to="/mail/send"><img class="btn-nav-mail" src="../../../icons/sendmail.png" alt=""></router-link>
    </div>
    <section class="main-mail flex ">
         <ul class="ul-mail clean-list">
            <li class="li-mail" v-for="mail in mails" :key="mail.id" >
                <mail-preview :mail="mail" @changeIsRead="onchangeIsRead"/>
            </li>
        </ul>
    </section>
    </div>
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