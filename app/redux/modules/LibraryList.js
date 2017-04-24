import _ from 'lodash'
import data from '../LibraryList.json'

let dataSource = [
  { name: 'nadar', sport: 'basketball' },
  { name: 'joe', sport: 'basketball' },
  { name: 'sam', sport: 'basketball' },
  { name: 'remi', sport: 'basketball' },
  { name: 'emaily', sport: 'basketball' },
  { name: 'sam', sport: 'baseball' },
  { name: 'nadar', sport: 'baseball' },
  { name: 'dd', sport: 'basketball' },
  { name: 'sam', sport: 'baseball' },
]

dataSource = _.groupBy(dataSource, d => d.sport) // groups array by the sport
dataSource = _.reduce(dataSource, (acc, next, index) => {
  console.log('index: ', index) // the grouped keys used from prior function
  acc.push({
    data: next,
    key: index,
  })
  return acc
}, [])
console.log('dataSource: ', dataSource)


// action types
const LIBRARY_SELECTED = 'LIBRARY_SELECTED'
const FETCHED_DATA = 'FETCHED_DATA'

// action creators
export function librarySelected(id) {
  return {
    type: LIBRARY_SELECTED,
    id,
  }
}

export function fetchedData(data) {
  return {
    type: FETCHED_DATA,
    data,
  }
}

export function handleDataFetch() {
  const url = 'https://randomuser.me/api/?seed=1&page=1&results=20'
  return async (dispatch) => {
    try {
      const res = await fetch(url)
      const jsonData = await res.json()
      console.log('dataResults :', jsonData.results)
      dispatch(fetchedData(jsonData.results))
    } catch (error) {
        console.log(error)
    }
  }
}

// reducers
const initialState = {
  libraryList: data,
  selectedLibraryId: '',
  randomData: [],
  dataSource,
}

export default function LibraryList(state = initialState, action) {
  switch (action.type) {
    case LIBRARY_SELECTED :
      return { ...state, selectedLibraryId: action.id }
    case FETCHED_DATA :
      return { ...state, randomData: action.data }
    default :
      return state
  }
}