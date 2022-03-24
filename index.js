const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
    return function() {
        return num * num;
    }
}


function fareDoubler(num){
    return num * 2;
}

function fareTripler(num){
    return num * 3;
}

const selectDifferentDrivers = (drivers, func) => {
    return func(drivers);
}    