import { utilService } from "../../../services/util.service.js";
import mailPreview from "./mail-preview.cmp.js";

export default {
    props: ["mails"],
    template: `
    <section>
        <ul>
            <li class="li-mail" v-for="mail in mails" :key="mail.id" >
                <mail-preview :mail="mail" @changeIsRead="onchangeIsRead"/>
            </li>
        </ul>
    </section>
        `,
    components: {
        mailPreview
    },
    data() {
        return {

        };
    },
    created() {

    },
    methods: {
        onchangeIsRead(idx) {
            this.mails.some(mail => {
                if (mail.id === idx) {
                    console.log(mail.isRead);
                    mail.isRead = !mail.isRead
                    console.log(mail.isRead);
                    return true
                } else return false
            })
            utilService._save('mailDB', this.mails)
        }
    },
    computed: {},
    unmounted() { },
};