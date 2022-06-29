import { utilService } from "../../services/util.service.js";
import { mailService } from "./service/mail.service.js";
import mailList from "./mail-list.cmp.js";

export default {
    template: `
      <section class="mail-conteiner">
        <h1>mail</h1>
        <mail-list :mails="mailToShow"></mail-list>
      </section>

`,
    data() {
        return {
            mails: null,
        };
    },
    components: {
        mailList
    },
    created() {
        utilService.query('mailDB')
            .then(mails => {
                this.mails = mails
                // console.log(this.mails)
            })
    },
    methods: {},
    computed: {
        mailToShow() {
            // console.log('this.mails', this.mails)
            return this.mails
        },
    },
    unmounted() { },
};