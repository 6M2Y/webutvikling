export function isLeapYear(yr){
    return (yr%4 === 0) &&
            (yr%100!== 0) ||
            (yr%400 === 0)
}

export function isLeapYearwithCondition(year){
    if(year < 0)
        throw new 'Invalid argument: year must be an integer equal to or larger than 0';
    else if(year || null || undefined)
        throw new 'Year is null or undefined';
    
    return (yr%4 === 0) &&
            (yr%100!== 0) ||
            (yr%400 === 0)
}