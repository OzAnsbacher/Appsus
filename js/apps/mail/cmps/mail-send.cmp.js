import { mailService } from "../service/mail.service.js";
import mailSendPreview from "./mail-send-preview.cmp.js";

export default {
    template: `
 <h1>send</h1>
 <router-link to="/mail"><button>Inbox</button></router-link>
    <router-link to="/mail/compose"><button>Compose</button></router-link>
    <router-link to="/mail/send"><button>Sent</button></router-link>
    <section v-for="mail in mailToShow">
        <mail-send-preview :mail="mail"></mail-send-preview>
    </section>
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