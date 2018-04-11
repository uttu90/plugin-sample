const ADD_COMMMENT = 'plugins-app/add-comment';
const EDIT_COMMENT = 'plugins-app/edit-comment';
const DELETE_COMMENT = 'plugins-app/delete-comment';

export function addComment(comment) {
  return {
    type: ADD_COMMMENT,
    payload: {
      id: String(Date.now()),
      text: comment
    }
  }
}

export function editComment(id, comment) {
  return {
    type: EDIT_COMMENT,
    payload: {
      id,
      text: comment
    }
  }
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    payload: {
      id
    }
  }
}

function commentReducer(state=[], action) {
  switch (action.type) {
    case ADD_COMMMENT:
      return [
        ...state,
        {
          ...action.payload
        }
      ]

    case EDIT_COMMENT:
      return state.map(comment => {
        if (comment.id !== action.payload.id) return comment;
        return { ...comment, text: action.payload.text };
      })

    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.payload.id);

    default:
      return state;
  }
}

export default commentReducer;