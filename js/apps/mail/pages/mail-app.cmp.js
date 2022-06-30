import { utilService } from "../../../services/util.service.js";
import { mailService } from "../service/mail.service.js";
import mailList from "../cmps/mail-list.cmp.js";

export default {
    template: `
      <section class="mail-conteiner">
        <h1>mail</h1>
        <mail-list :mails="mailToShow"></mail-list>
      </section>

`,
    data() {
        return {
            mailToShow: null,
            countMailUnRead: 0
        };
    },
    components: {
        mailList
    },
    created() {
        mailService.query('mailDB')
            .then(mails => {
                this.mailToShow = mails
            })
    },
    methods: {},
    computed: {
        // mailToShow() {
        //     // console.log('this.mails', this.mails)
        //     return this.mails
        // },
    },
    unmounted() { },
};