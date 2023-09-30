import { isLeapYear, isLeapYearwithCondition } from "./app";


describe('Year is a leap year', () => {
    test('year is divisible by 4 not by 100', () => {
    expect(isLeapYear(2020)).toBeTruthy();
});

test('year is divisible by 400', () => {
    expect(isLeapYear(2000)).toBeTruthy();
});
});

describe('Year is not a leap year', () => {
    test('Year is not divsible by 4', () => {
        expect(isLeapYear(2023)).toBeFalsy();
    });

    test('year is not divisble by 400 but by 100', () => {
        expect(isLeapYear(2100)).toBeFalsy();
    });
    
    
});


//oppgave 1
test.each([1820,1960,2020])(' Year, %i, is divisible by 4 but not by 100', (a) =>{
    expect(isLeapYear(a)).toBeTruthy();
})

//oppgave 2
test('Throws error object', () => {
    expect(isLeapYearwithCondition(-2020)).toThrow();
});

//oppgave 3
test('Year is null or undefined', () => {
    expect(isLeapYearwithCondition("3ew")).toThrow();
});


//oppgave 4

describe('A year is not spoorted', () => {

    test('Throws error object', () => {
        expect(isLeapYearwithCondition(-2020)).toThrow();
    });


    test('Year is null or undefined', () => {
        expect(isLeapYearwithCondition("3ew")).toThrow();
    });
    
});
