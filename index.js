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