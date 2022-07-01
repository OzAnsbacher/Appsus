import mailOpen from "./mail-open.cmp.js";

export default {
  props: ["mail"],
  template: `
  <mail-open :mail="mail" v-if="isOpen" @closedMail="isOpen=null" />
<section v-else>
  <div class="mail-name" @click="selectMail(mail.id)" :class="{'read-mail':isRead}" >{{nameSend}}</div>
  <div class="mail-subject" @click="selectMail(mail.id)" :class="{'read-mail':isRead}">{{subject}}</div>
  <div class="mail-sentAt" @click="selectMail(mail.id)" :class="{'read-mail':isRead}">{{time}}</div>
  <img @click="selectMail(mail.id, false)" class="img-list-mail" src="././././icons/openmail.png" alt="">
  <img class="img-list-mail" @click="removeMail(mail.id)" src="././././icons/delete.png" alt="">
  <img class="img-list-mail" src="././././icons/replyarrow.png" alt="">
</section>
   `,
  data() {
    return {
      nameSend: null,
      subject: null,
      time: null,
      isRead: null,
      isOpen: null
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
    selectMail(idx, toOpenMail = true) {
      if (toOpenMail) this.isOpen = true
      this.isRead = false
      console.log(idx);
      this.$emit("changeIsRead", idx)
    },
    removeMail(idx) {
      this.$emit("removeMail", idx)
     
    }
  },
  computed: {

  },
};