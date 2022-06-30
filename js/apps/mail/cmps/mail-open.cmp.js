export default {
    props: ["mail"],
    template: `
    <section class="open-mail" @click="closeMail">
        <div>{{mail.subject}}</div>
        <div><span class="label-open-mail">From:</span>{{nameSend}}</div>
        <div><span class="label-open-mail">At:</span>{{time}}</div>
        <div><span class="label-open-mail">Body:</span>{{mail.body}}</div>
    </section>
`,
    data() {
        return {
            nameSend: null,
            time: null,
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
            year = year % 100
            minutes = (minutes < 10) ? '0' + minutes : minutes
            hours = (hours < 10) ? '0' + hours : hours
            month = (month < 10) ? '0' + month : month
            this.time = `${date}-${month}-${year} | ${hours}:${minutes}`
        },
        closeMail(){
            this.$emit("closedMail")
        }
    },
    computed: {},
    unmounted() { },
};