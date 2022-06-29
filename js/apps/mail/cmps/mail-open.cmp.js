export default {
    props: ["mail"],
    template: `
 <subject-mail>{{mail.subject}}</subject-mail>
 <send-mail>{{nameSend}}</send-mail>
 <time-mail>{{time}}</time-mail>
 <body-mail>{{mail.body}}</body-mail>
`,
    data() {
        return {
            nameSend: null,
            time:null,
            nameSend: null,


        };
    },
    created() {
        this.nameSend = this.mail.to.slice(0, this.mail.to.indexOf('@')),
            this.getFormattedTime(this.mail.sentAt)
    },
    methods: {
        // At 2018-09-24  Time: 10:23
        getFormattedTime(time) {
            var newDate = new Date(time)
            var year = newDate.getFullYear()
            var month = newDate.getMonth() + 1
            var date = newDate.getDate()
            var hours = newDate.getHours()
            var minutes = newDate.getMinutes()

            month = (month < 10) ? '0' + month : month
            this.time=  year + '-' + month + '-' + date
        }
    },
    computed: {},
    unmounted() { },
};