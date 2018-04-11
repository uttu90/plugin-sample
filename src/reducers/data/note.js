const CRREATE_NOTE = 'plugins-app/create-notes';
const EDIT_NOTE = 'plugins-app/edit-note';
const DELETE_NOTE = 'plugins-app/delete-note';

export function createNote(note) {
  return {
    type: CRREATE_NOTE,
    payload: {
      id: String(Date.now()),
      note
    }
  }
}

export function editNote(id, note) {
  return {
    type: EDIT_NOTE,
    payload: {
      id,
      note
    }
  }
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    payload: {
      id
    }
  }
}

export default function noteReducer(state = [], action) {
  switch (action.type) {
    case CRREATE_NOTE:
      return [
        ...state,
        {
          ...action.payload
        }
      ]
    
    case EDIT_NOTE:
      return state.map(note => {
        if (note.id !== action.payload.id) return note;
        return {
          ...note,
          note: action.payload.note
        }
      })
    
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.payload.id);

    default:
      return state;
  }
}