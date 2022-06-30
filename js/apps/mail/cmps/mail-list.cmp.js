import { utilService } from "../../../services/util.service.js";
import mailPreview from "./mail-preview.cmp.js";

export default {
    props: ["mails"],
    template: `
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
        mailPreview
    },
    data() {
        return {

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
    },
    computed: {
        // debugger
        getCountUnread() {
            let count = 0
            this.mails.forEach(mail => {
                if (mail.isRead) count++
            })
            return count
        }

    },
    unmounted() { },
};