import { utilService } from "../../../services/util.service.js";
import { mailService } from "../service/mail.service.js";
import mailList from "../cmps/mail-list.cmp.js";

export default {
    template: `
 
      <section class="app-mails-conteiner">
        <mail-list :mails="onMailToShow" @removingMail="onRemove" @filterMails="onFilters"></mail-list>
      </section>

`,
    data() {
        return {
            mailToShow: null,
            countMailUnRead: 0,
            filterBy: {
                txt: null,
                read: null,
                byOrder: null,
            }
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
        onRemove(idx) {
            // console.log(this.mailToShow);
            this.mailToShow = this.mailToShow.filter(mail => mail.id !== idx)
            // console.log(this.mailToShow);
            utilService._save('mailDB', this.mailToShow)
        },
        onFilters(filterBy) {
            this.filterBy = filterBy
            this.$emit("filterMails", this.filterBy)
        }
    },
    computed: {
        onMailToShow() {
            // var mails
            if (!this.mailToShow) return mailService.query('mailDB')
                .then(mails => {
                    return this.mailToShow = mails
                })
            else {
                if (this.filterBy.txt) {
                    console.log(this.filterBy.txt);
                    const regex = new RegExp(this.filterBy.txt, 'i')
                    return this.mailToShow.filter((mail) => regex.test(mail.subject))
                    //  && mail.listPrice.amount >= this.filterBy.price)
                }
                // if (this.filterBy.read === 'read') {
                //     mails = this.mailToShow.filter((mail) => !mail.isRead)
                // } else if (this.filterBy.read === 'unread') {
                //     mails = this.mailToShow.filter((mail) => mail.isRead)
                // }
                // return mails
                return this.mailToShow
            }
        },
    },
    unmounted() { },
};