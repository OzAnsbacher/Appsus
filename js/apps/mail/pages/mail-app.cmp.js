import { utilService } from "../../../services/util.service.js";
import { mailService } from "../service/mail.service.js";
import mailList from "../cmps/mail-list.cmp.js";

export default {
    template: `
 
      <section class="app-mails-conteiner">
        <mail-list :mails="mailToShow" @removingMail="onRemove"></mail-list>
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
    methods: {
        onRemove(idx){
            // console.log(this.mailToShow);
            this.mailToShow=this.mailToShow.filter(mail=>mail.id!==idx)
            // console.log(this.mailToShow);
            utilService._save('mailDB',this.mailToShow)
        }
    },
    computed: {
        // mailToShow() {
        //     // console.log('this.mails', this.mails)
        //     return this.mails
        // },
    },
    unmounted() { },
};