const KEYS ={
    employees:'employees',
    employeeId:'employeeId'
}

export const getFloorCollection = ()=>([
    { id: '1', title: '1st' },
    { id: '2', title: '2nd' },
    { id: '3', title: '3rd' },
    { id: '4', title: '4th' },
])
export const getFlatCollection = ()=>([
    { id: '1', title: '101' },
    { id: '2', title: '102' },
    { id: '3', title: '103' },
    { id: '4', title: '104' },
])

export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}