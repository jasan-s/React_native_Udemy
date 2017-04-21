import data from '../LibraryList.json'

// action types
const LIBRARY_SELECTED = 'LIBRARY_SELECTED'

// action creators
export function librarySelected(id) {
  return {
    type: LIBRARY_SELECTED,
    id,
  }
}

// reducers
const initialState = {
  libraryList: data,
  selectedLibraryId: '',
}

export default function LibraryList(state = initialState, action) {
  switch (action.type) {
    case LIBRARY_SELECTED :
      return { ...state, selectedLibraryId: action.id }
    default :
      return state
  }
}