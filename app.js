export function isLeapYear(yr){
    return (yr%4 === 0) &&
            (yr%100!== 0) ||
            (yr%400 === 0)
}

export function isLeapYearWithCondition(year){
    if(year < 0)
        throw new Error('Invalid argument: year must be an integer equal to or larger than 0');
    else if(year === null || year === undefined)
        throw new Error('Year is null or undefined');
    
    return (yr%4 === 0) &&
            (yr%100!== 0) ||
            (yr%400 === 0)
}