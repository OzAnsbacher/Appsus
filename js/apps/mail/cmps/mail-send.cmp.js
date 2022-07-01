import { mailService } from "../service/mail.service.js";
import mailSendPreview from "./mail-send-preview.cmp.js";

export default {
    template: `
 <h1>send</h1>
 <!-- <div class="mail-list-conteiner"> -->
    <div class="send-mail flex">
    <div class="nav-mail send flex">
        <router-link to="/mail"><img class="btn-nav-mail" src="../../../icons/inboxmail.png" alt=""></router-link>
        <router-link to="/mail/compose"><img class="btn-nav-mail" src="../../../icons/newmail.png" alt=""></router-link>
        <router-link to="/mail/send"><img class="btn-nav-mail" src="../../../icons/sendmail.png" alt=""></router-link>
    </div>
 <!-- <router-link to="/mail"><button>Inbox</button></router-link>
    <router-link to="/mail/compose"><button>Compose</button></router-link>
    <router-link to="/mail/send"><button>Sent</button></router-link> -->
    <!-- <section class="main-mail flex ">
         <ul class="ul-mail clean-list">
            <li class="li-mail" v-for="mail in mails" :key="mail.id" >
                <mail-preview :mail="mail" @changeIsRead="onchangeIsRead"/>
            </li>
        </ul>
    </section> -->
    <section v-for="mail in mailToShow">
        <mail-send-preview  :mail="mail"></mail-send-preview>
    </section>
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