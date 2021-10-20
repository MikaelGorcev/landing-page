import {getSummerAndSpringMonth}from'../t1.js';

describe ('get month',()=> {

    it('show April',()=>{
        expect(getSummerAndSpringMonth(4)).toBe('April');
    }),
    it('warning about numbers',()=>{
        expect(getSummerAndSpringMonth('ghgjk')).toBe('only numbers');
    }),
    it('warning about month',()=>{
        expect(getSummerAndSpringMonth(1)).toBe('only summer or spring months');
    }),
    it('empty place',()=>{
        expect(getSummerAndSpringMonth()).toBe('enter number');
    }),
    it('float value',()=>{
        expect(getSummerAndSpringMonth(6.5)).toBe('June');
    })
});