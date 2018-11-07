
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

export interface Employee {
  uid: string
  name: string
  dateOfBirth: Date
  country: string
  username: string
  hireDate: Date 
  active: boolean
  jobArea: string
  jobTitle: string
  tipRate?: number
}
const employee = {
  active: true,
  age: 23,
  country: "Colombia",
  dateOfBirth: new Date(1995, 6, 22),
  hireDate: new Date(2017, 6, 22),
  jobArea: "services",
  jobTitle: "manager",
  name: "alejandro",
  uid: "1541603486298",
  username: "nando"
}
export function employeesReducer(state: Employee[] = [employee], action) {
  const { type, payload } = action;
  if (type === ADD_EMPLOYEE) {
    return [
      ...state,
      {...payload.employee}
    ]
  } else if (type === DELETE_EMPLOYEE) {
    const { uid } = payload;
    return state.filter((employee: Employee) => {
      if (employee.uid === uid) {
        return false;
      }
      return true
    })
  } else if (type === UPDATE_EMPLOYEE) {
    return state.map((employee: Employee) => {
      if (employee.uid === payload.employee.uid) {
        return payload.employee;
      }
      return employee;
    })
  }
  return state;
}