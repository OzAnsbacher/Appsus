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
  querySearchSort,
  addNote,
  togglePin,
  removeFromNotes,
  changeIsDone,
  deleteNote,

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



function querySearchSort(filterAndSortParams){
  // console.log(filterAndSortParams)
  if (!notes) notes = storageService.load(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = fakeNotes;
        storageService.store(NOTES_KEY, notes)
    }

    if (!filterAndSortParams) return Promise.resolve(notes)
    
    let filteredNotes = notes;

    if (filterAndSortParams.searchParam) {

        filteredNotes = filteredNotes.filter(note => {
            if (note.type === 'txt') {
                return note.data.toLowerCase().includes(filterAndSortParams.searchParam.toLowerCase());
            } else if (note.type === 'todo') {              
                let filteredTodos = note.data.filter(todo => todo.text.toLowerCase().includes(filterAndSortParams.searchParam.toLowerCase()))
                return filteredTodos.length
            }
            return false;
        })
    }

    if (filterAndSortParams.filter && filterAndSortParams.filter !== 'all') {
        filteredNotes = filteredNotes.filter(note => (note.type === filterAndSortParams.filter));
    }

    if (filterAndSortParams.sort.by && filterAndSortParams.sort.optsion) {
        filteredNotes = sortNotes(filteredNotes,filterAndSortParams.sort);
      }
      
      // console.log('filteredNotes',filteredNotes)
    return Promise.resolve(filteredNotes);
}


function sortNotes(notesToSort, sorter) {
  // console.log("inside sort")
  var sortFunc;
  
  if (sorter.by === 'date') {
      sortFunc = utilService.createSortFuncDate(sorter.optsion,'date');
  } else {
      sortFunc = utilService.createSortFuncTxt(sorter.by, sorter.optsion);
  }

// console.log('notesToSort',notesToSort)

  let sortedNote= notesToSort.sort(sortFunc);
  // console.log('sortedNote',sortedNote);

  return sortedNote
}