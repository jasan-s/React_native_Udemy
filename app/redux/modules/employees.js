const EMPLOYEE_INPUT_DATA = 'EMPLOYEE_INPUT_DATA'

export function employeeInputChange(field, value) {
  return {
    type: EMPLOYEE_INPUT_DATA,
    field,
    value,
  }
}

const initialState = {
  name: '',
  phone: '',
  shift: '',
  employeesList: [],
}
export default function employees(state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_INPUT_DATA :
      return {
        ...state,
        [action.field]: action.value,
      }
    default :
      return state
  }
}