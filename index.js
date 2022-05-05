// Your code here
function createEmployeeRecord(employee) {
    
    return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(event) {
    let [date, hour] = event.split(" ")
    let eventObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    }
    
    this.timeInEvents.push(eventObj)
    return this
}

function createTimeOutEvent(event) {
    let [date, hour] = event.split(" ")
    let eventObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }
    
    this.timeOutEvents.push(eventObj)
    return this
}