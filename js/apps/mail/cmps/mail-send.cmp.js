import { mailService } from "../service/mail.service.js";
import mailSendPreview from "./mail-send-preview.cmp.js";

export default {
    template: `
 <h1>send</h1>
    <div class="send-mail flex">
    <div class="nav-mail send flex">
        <router-link to="/mail/compose"><img class="btn-nav-mail new-mail" src="./././icons/newmail.png" alt=""></router-link>
        <router-link to="/mail"><img class="btn-nav-mail" src="./././icons/inboxmail.png" alt=""></router-link>
        <router-link to="/mail/send"><img class="btn-nav-mail" src="./././icons/sendmail.png" alt=""></router-link>
    </div>
    <!-- <div v-for="mail in mailToShow"> -->
    <ul class="ul-mail clean-list">
            <li class="li-mail" v-for="mail in mailToShow" :key="mail.id" >
        <mail-send-preview  :mail="mail"></mail-send-preview>
        </li>
        </ul>
    </div>
    </div>
`,
    data() {
        return {
            mailToShow:null
        };
    },
    components: {
        mailSendPreview,
    },
    created() {
        this.getSendMail()
    },
    methods: {
        getSendMail() {
            mailService.query('sendMailDB')
                .then(mails => {
                    this.mailToShow = mails
                })
        },
    },
    computed: {},
    unmounted() { },
};