// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('isPhoneNumber test', () => {
    expect(functions.isPhoneNumber("8582038254")).toBe(false);
});

test('isPhoneNumber test', () => {
    expect(functions.isEmail("p2luo@ucsd.edu")).toBe(true);
});  

test('isStrongPassword test', () => {
    expect(functions.isStrongPassword("123456")).toBe(false);
}); 

test('isDate test', () => {
    expect(functions.isDate("01012000")).toBe(false);
}); 

test('isHexColor test', () => {
    expect(functions.isHexColor("000")).toBe(true);
}); 