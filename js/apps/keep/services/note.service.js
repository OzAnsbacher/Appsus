import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/Storage.service.js"

var notesDB = []
const NOTES_KEY = "notes"

const gNotes = [
  {
    type: "img",
    data: "https://i.insider.com/5b7439f21982d822008b5136?width=1000&format=jpeg&auto=webp",
    id: utilService._makeId(),
    date: new Date(),
    isPinned: false,
  },
  {
    type: "video",
    data: "https://www.youtube.com/watch?v=dTRBnHtHehQ",
    id: utilService._makeId(),
    date: new Date(),
    isPinned: false,
  },
  {
    type: "txt",
    data: "this is my note!",
    id: utilService._makeId(),
    date: new Date(),
    isPinned: false,
  },

  {
    type: "img",
    data: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203426903979&ssbinary=true",
    id: utilService._makeId(),
    date: new Date(),
    isPinned: false,
  },

  {
    type: "img",
    data: "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203427678643&ssbinary=true",
    id: utilService._makeId(),
    date: new Date(),
    isPinned: false,
  },

  {
    type: "img",
    data: "https://cdn.vox-cdn.com/thumbor/W9cTaRAkndjqCkksEt1LlOazWK8=/0x0:3543x2362/920x613/filters:focal(1544x923:2110x1489):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70500606/1237247725.0.jpg",
    id: utilService._makeId(),
    date: new Date(),
    isPinned: false,
  },
]

export default {
  query,
  addNote,
  togglePin,
  removeFromNotes,
  changeIsDone,
  // getNotes,
  // newNote,
  // addNote,
  // newNote,
  // removePinned,
  // copyNote,
  // pinNote,
  deleteNote,
  // editNote,
  // save,
}
var notes = _createNotes()

function _createNotes() {
  let notes = storageService.loadFromStorage(NOTES_KEY)
  if (!notes || !notes.length || notes === "undefined") {
    storageService.saveToStorage(NOTES_KEY, gNotes)
  }
  return notes
}

function query() {
  return utilService.query(NOTES_KEY)
}

function addNote(type, color, data, isPinned) {
  let newNote = {
    id: utilService._makeId(),
    type,
    color,
    data,
    isPinned,
    date: new Date(),
  }
  notes.unshift(newNote)
  return utilService.post(NOTES_KEY, newNote)
}

function togglePin(noteId) {
  let UpdatedNote = notes.find((note) => note.id === noteId)
  UpdatedNote.isPinned = !UpdatedNote.isPinned
  if (UpdatedNote.isPinned) {
    console.log("pinnnnnned")
  }
  console.log(UpdatedNote.isPinned)
  storageService.store(NOTES_KEY, notes)
}

function deleteNote(noteId) {
  return utilService.remove(NOTES_KEY, noteId)
}

function removeFromNotes(noteId) {
  // const idx = notes.findIndex((note) => note.id === noteId)
  // console.log(idx)
  // console.log('notes befor',notes)
  // notes.splice(idx, 1)
  // console.log('notes after',notes)
  let notes = utilService.remove(NOTES_KEY, noteId)
  console.log(notes) 
  return notes
}



function changeIsDone(todoId, noteId) {
  const note = notes.find(note => note.id === noteId);
  let todos = note.content;
  const todo = todos.find(todo => todo.id === todoId);
  console.log(todo);
  
  todo.isDone = !todo.isDone;
  storageService.store(NOTES_KEY, notes);
}

//return all saved notes or hardcooded notes
// function getNotes() {
//     var notes = utilService.query(NOTES_KEY)
//     console.log(notes)
//     if (notes && notes.length) notesDB = notes
//     // else {
//         // addNote({ type: 'video', data: 'https://www.youtube.com/watch?v=izTMmZ9WYlE' })
//         addNote({ type: 'img', data: 'https://i.insider.com/5b7439f21982d822008b5136?width=1000&format=jpeg&auto=webp' })
//         // addNote({ type: 'txt', data: 'this is my note!' })
//         // addNote({ type: 'txt', data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem' })
//         addNote({ type: 'img', data: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203426903979&ssbinary=true' })
//         // addNote({ type: 'todo', data: 'gym, laundry, study, repeat' })
//         // addNote({ type: 'txt', data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem' })
//         addNote({ type: 'img', data: 'https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203427678643&ssbinary=true' })
//         // addNote({ type: 'todo', data: 'sleep early, eat well' })
//         addNote({ type: 'img', data: 'https://cdn.vox-cdn.com/thumbor/W9cTaRAkndjqCkksEt1LlOazWK8=/0x0:3543x2362/920x613/filters:focal(1544x923:2110x1489):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70500606/1237247725.0.jpg' })
//         // save(NOTES_KEY, notesDB)
//     //
//     return notesDB
// }

// // add a new note to notes//
// function addNote({type,data}){
// // console.log('type= ',type,'data= ',data)
// var newAddedNote = newNote(type,data)
// notesDB.push(newAddedNote)
// // console.log(notesDB)

// }

// //create new empty note
// function newNote(type,data){
//     return{
//         type,
//         data,
//         id:utilService._makeId(),
//         date: new Date(),
//         isPinned: false,

//     }
// }

// function removePinned(){}

// function copyNote(id){}

// function pinNote(id){}

// function deleteNote(id){}

// function editNote(newNote){}

// function save(){
//     return utilService.post(NOTES_KEY, notesDB)
// }
