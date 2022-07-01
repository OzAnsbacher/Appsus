import { utilService } from "../../../services/util.service.js";

export default {
    template: `
 <section class="compose-conteiner" >
 <div class="mail-list-conteiner flex">
    <div class="nav-mail compose-nav flex">
        <router-link to="/mail"><img class="btn-nav-mail" src="../../../icons/inboxmail.png" alt=""></router-link>
        <router-link to="/mail/compose"><img class="btn-nav-mail" src="../../../icons/newmail.png" alt=""></router-link>
        <router-link to="/mail/send"><img class="btn-nav-mail" src="../../../icons/sendmail.png" alt=""></router-link>
    </div>
 <!-- <router-link to="/mail"><button>Inbox</button></router-link>
    <router-link to="/mail/compose"><button>compose</button></router-link>
    <router-link to="/mail/send"><button>Sent</button></router-link>
 <p>{{sentMail}}</p> -->
 <div class="compose-main">
     <input type="email" class="compose-adrress" v-model="sentMail.to" id="addressEmail" placeholder="to:" autofocus>
     <button class="compose-btn" @click="sentingMail">Send</button>
     <input type="text" class="compose-subject" v-model="sentMail.subject" id="subjectEmail" placeholder="subject:">
     <textarea name="" class="compose-txt" v-model="sentMail.body" id="bodyTxtEmail" cols="30" rows="10"></textarea>
     </div>
     </div>
  </section>
`,
    data() {
        return {
            sentMail: {
                id: utilService._makeId(),
                to: null,
                subject: null,
                body: null,
                sentAt: null,
            }
        };
    },
    created() { },
    methods: {
        sentingMail() {
            if (!this.sentMail.to || (!this.sentMail.subject && !this.sentMail.body)) return
            this.sentMail.sentAt = Date.now()
            utilService.post('sendMailDB', this.sentMail)
            this.$router.push('/mail')
        }
    },
    computed: {

    },
    unmounted() { },
};