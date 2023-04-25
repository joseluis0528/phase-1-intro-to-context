// Your code here

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array) {
    return array.map(eployee => createEmployeeRecord(eployee));
}

function createTimeInEvent(employee, dateStamp) {
    const timeAndDate = dateStamp.split(' ');
    const newEvent = {
        type: 'TimeIn',
        hour: parseInt(timeAndDate[1]),
        date: timeAndDate[0]
    }
    employee.timeInEvents.push(newEvent);
    return employee;
}

function createTimeOutEvent(employee, dateStamp) {
    const timeAndDate = dateStamp.split(' ');
    const newEvent = {
        type: 'TimeOut',
        hour: parseInt(timeAndDate[1]),
        date: timeAndDate[0]
    } 
    employee.timeOutEvents.push(newEvent);
    return employee;
}

function hoursWorkedOnDate(employee, date) {
    const clockIn = employee.timeInEvents.find(record => record.date === date);
    const clockOut = employee.timeOutEvents.find(record => record.date === date);
    return parseInt(clockOut.hour * 0.01) - parseInt(clockIn.hour * 0.01);
}

function wagesEarnedOnDate(employee, date) {
    return hoursWorkedOnDate(employee, date) * employee.payPerHour;
}

function allWagesFor(employee) {
    const daysWorked = employee.timeInEvents.map(day => day.date)
    const totalWages = daysWorked.reduce((memo, date) => {
        return memo + wagesEarnedOnDate(employee, date);
    }, 0)
    return totalWages;
}

function calculatePayroll(employees) {
    const allWages = employees.map(employee => allWagesFor(employee));
    const totalWages = allWages.reduce((memo, employee) => {
        return memo + employee;
    }, 0)
    return totalWages;
}