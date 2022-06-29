import utilService from '/util.service.js'

var notesDB = []
const NOTES_KEY = 'notes'

export default{
getNotes,
addNote,

}

//return all saved notes or hardcooded notes
function getNotes() {
    var notes = utilService.query(NOTES_KEY)
    if (notes && notes.length) notesDB = notes
    else {
        addNote({ type: 'video', data: 'https://www.youtube.com/watch?v=izTMmZ9WYlE' })
        addNote({ type: 'img', data: 'https://i.insider.com/5b7439f21982d822008b5136?width=1000&format=jpeg&auto=webp' })
        addNote({ type: 'txt', data: 'this is my note!' })
        addNote({ type: 'txt', data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem' })
        addNote({ type: 'img', data: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203426903979&ssbinary=true' })
        addNote({ type: 'todo', data: 'gym, laundry, study, repeat' })
        addNote({ type: 'txt', data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem' })
        addNote({ type: 'img', data: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203427678643&ssbinary=true' })
        addNote({ type: 'todo', data: 'sleep early, eat well' })
        addNote({ type: 'img', data: 'https://cdn.vox-cdn.com/thumbor/W9cTaRAkndjqCkksEt1LlOazWK8=/0x0:3543x2362/920x613/filters:focal(1544x923:2110x1489):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70500606/1237247725.0.jpg' })
        utilService.saveToStorage(NOTES_KEY, notesDB)
    }
    return notesDB


}

// add a new note to notes//need fix
function addNote({type,data}){
console.log('type= ',type,'data= ',data)
let newNote = newNote(type)


}

//create new empty note
function newNote(type){
    return{
        type,
        id:utilService.makeId,
        date: new Date(),
        isPinned: false, 
    }
}

function removePinned(){}

function copyNote(id){}

function pinNote(id){}

function deleteNote(id){}

function editNote(newNote){}