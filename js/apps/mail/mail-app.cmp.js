import { mailService } from "./service/mail.service.js";

export default {
    template: `
      <section class="mail-conteiner">
        <mail-list :mail="mailToShow"></mail-list>
      </section>

`,
    data() {
        return {
            mails: null,
        };
    },
    components: {

    },
    created() {
        this.mails= mailService.creatMails()
        console.log(this.mails);
        // mailService.query()
        //     .then(mails => this.mails = mails)
    },
    methods: {},
    computed: {
        booksToShow() {
            console.log('this.mails', this.mails)
            return this.mails
        },
    },
    unmounted() { },
};