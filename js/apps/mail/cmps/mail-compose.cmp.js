import { utilService } from "../../../services/util.service.js";

export default {
    template: `
 <section>
 <router-link to="/mail"><button>Inbox</button></router-link>
    <router-link to="/mail/compose"><button>Compose</button></router-link>
    <router-link to="/mail/send"><button>Sent</button></router-link>
 <p>{{sentMail}}</p>
     <input type="email" v-model="sentMail.to" id="addressEmail" placeholder="to:" autofocus>
     <input type="text" v-model="sentMail.subject" id="subjectEmail" placeholder="subject:">
     <textarea name="" v-model="sentMail.body" id="bodyTxtEmail" cols="30" rows="10"></textarea>
     <button @click="sentingMail">Send</button>
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