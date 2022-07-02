import { utilService } from "../../../services/util.service.js";
import mailPreview from "./mail-preview.cmp.js";
import mailCompose from "./mail-compose.cmp.js";

export default {
    props: ["mails"],
    template: `
    <div class="header-mail-main flex space-between">
        <section class="inpox-filters">
            <input type="search" class="search-inbox" v-model="filterBy.txt" @input="filter" placeholder="search">
            <select class="inbox-filter" id="">
            <!-- <select class="inbox-filter" @change="filter" v-model="filterBy.read" id=""> -->
                <option value=""></option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
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
        <router-link to="/mail/compose"><img class="btn-nav-mail new-mail" src="./././icons/newmail.png" alt=""></router-link>
        <router-link to="/mail"><img class="btn-nav-mail" src="./././icons/inboxmail.png" alt=""></router-link>
        <router-link to="/mail/send"><img class="btn-nav-mail" src="./././icons/sendmail.png" alt=""></router-link>
    </div>
    <section class="main-mail flex ">
         <ul class="ul-mail clean-list">
            <li class="li-mail" v-for="mail in mails" :key="mail.id" >
                <mail-preview :mail="mail" @removeMail="remove" @changeIsRead="onchangeIsRead"/>
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
            filterBy: {
                txt: null,
                read: null,
                byOrder: null,
            }
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
        remove(idx) {
            this.$emit("removingMail", idx)
        },
        filter() {
            // console.log(this.filterBy);
            this.$emit("filterMails", this.filterBy)
        }

    },
    computed: {
        // debugger
        getCountUnread() {
            if (!this.mails) return
            let count = 0
            this.mails.forEach(mail => {
                if (mail.isRead) count++
                return
            })
            return count
        },

    },
    unmounted() { },
};