import { utilService } from "../../../services/util.service.js"


const txt = 'this user is hard coded and there is no need to build a login system. In the inbox show all the emails that were sent to the current user, the other emails are sent emails and should be displayed at the sent folder. The emailService query function should get a criteria object, here is an idea.'
const subject = ['Important', 'Miss you!', 'Hello sir', 'You must read this', 'Annual Report']
const address = ['momo@momo.com', 'shay33@gmail.com', 'adam@gmail.com', 'jinji@gmail.com', 'DaniDin@gmail.com', 'aladin33@gmail.com']
var gMail = []
const KEY_MAIL = 'mailDB'
var time = Date.now()



export const mailService = {
    creatMails,
    creatMail,
    query,
}

function query(KEY_MAIL) {
    return utilService.query(KEY_MAIL)
        .then(mails => {
            gMail = mails
            if (!gMail || !gMail.length) {
                utilService._save(KEY_MAIL, creatMails())
                gMail = utilService.query(KEY_MAIL)
            }
            return gMail
        })

}

function creatMails() {
    for (let i = 0; i < 20; i++) {
        gMail.push(creatMail())
        time -= 50000000 * i
    }
    return gMail
}

function creatMail() {
    return {
        id: utilService._makeId(),
        subject: subject[utilService.getRandomInt(0, subject.length)],
        body: txt.slice(utilService.getRandomInt(0, 40), utilService.getRandomInt(40, txt.length)),
        isRead: utilService.getRandomInt(0, 2) === 0,
        sentAt: time,
        to: address[utilService.getRandomInt(0, address.length)]
    }
}

