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

function createTimeInEvent(obj, dateStamp) {
    const timeAndDate = dateStamp.split(' ');
    obj.timeInEvents = [
        {
            type: 'TimeIn',
            hour: parseInt(timeAndDate[1]),
            date: timeAndDate[0]
        }
    ]
    return obj;
}

function createTimeOutEvent(obj, dateStamp) {
    const timeAndDate = dateStamp.split(' ');
    obj.timeOutEvents = [
        {
            type: 'TimeOut',
            hour: parseInt(timeAndDate[1]),
            date: timeAndDate[0]
        }
    ]
    return obj;
}

function hoursWorkedOnDate(obj, date) {
    const clockIn = obj.timeInEvents.find(record => record.date === date);
    const clockOut = obj.timeOutEvents.find(record => record.date === date);
    return parseInt(clockOut.hour * 0.01) - parseInt(clockIn.hour * 0.01);
}

function wagesEarnedOnDate(obj, date) {
    return hoursWorkedOnDate(obj, date) * obj.payPerHour
}