import mailOpen from "./mail-open.cmp.js";

export default {
  props: ["mail"],
  template: `
  <mail-open :mail="mail" v-if="isOpen" />
<section v-else>
  <div class="mail-name" @click="selectMail(mail)" :class="{'read-mail':isRead}" >{{nameSend}}</div>
  <div class="mail-subject" @click="selectMail(mail)" :class="{'read-mail':isRead}">{{subject}}</div>
  <div class="mail-sentAt" @click="selectMail(mail)" :class="{'read-mail':isRead}">{{time}}</div>
  <button>Read</button>
  <button>Delete</button>
  <button>Comment</button>
</section>
   `,
  data() {
    return {
      nameSend: null,
      subject: null,
      time: null,
      isRead: null,
      isOpen:null
    };

  },
  components: {
    mailOpen
},
  created() {
    this.nameSend = this.mail.to.slice(0, this.mail.to.indexOf('@')),
      this.subject = this.mail.subject
    this.getTime(this.mail.sentAt)
    this.isRead = this.mail.isRead

  },
  methods: {
    getTime(time) {
      var now = Date.now()
      var diff = now - time
      const MINUTE = 1000 * 60

      if (diff < MINUTE) this.time = 'Just now'
      else if (diff < MINUTE * 5) this.time = 'Few minutes ago'
      else if (diff < MINUTE * 60 * 24) this.time = 'Today'
      else if (diff < MINUTE * 60 * 48) this.time = 'Yesterday'
      else if (diff < MINUTE * 60 * 24 * 7) this.time = 'This week'
      else if (diff < MINUTE * 60 * 24 * 30) this.time = 'This month'
      else this.time = this.getFormattedTime(time)
    },
    getFormattedTime(time) {
      var newDate = new Date(time)
      var year = newDate.getFullYear()
      var month = newDate.getMonth() + 1
      var date = newDate.getDate()
      var monthToDisplay = (month < 10) ? '0' + month : month
      return 'At ' + year + '-' + monthToDisplay + '-' + date
    },
    selectMail(mail) {
      this.isOpen=!this.isOpen
      this.isRead=!mail.isRead
      this.$emit("changeIsRead", mail.idx)
    },
  },
  computed: {

  },
};