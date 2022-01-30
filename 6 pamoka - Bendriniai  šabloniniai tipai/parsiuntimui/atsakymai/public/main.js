"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7];
const strings = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];
const booleans = [true, true, true, true, false];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    function solution(arr) {
        return arr[0];
    }
    console.log({ numbers, result: solution(numbers) });
    console.log({ strings, result: solution(strings) });
    console.log({ booleans, result: solution(booleans) });
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    function solution(arr) {
        return arr[arr.length - 1];
    }
    console.log({ numbers, result: solution(numbers) });
    console.log({ strings, result: solution(strings) });
    console.log({ booleans, result: solution(booleans) });
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    function solution(arr) {
        const copy = arr.map(x => x);
        return copy;
    }
    console.log({ numbers, result: solution(numbers) });
    console.log({ strings, result: solution(strings) });
    console.log({ booleans, result: solution(booleans) });
}
console.groupEnd();
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
    function solution(value, count) {
        return Array.from(new Array(count)).map(_ => value);
    }
    const dataSamples = [
        ['a', 2],
        [77, 4],
        [true, 1],
    ];
    dataSamples.forEach((args) => console.log(`solution(${args.join(', ')}):`, solution(...args)));
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
    function solution(arr1, arr2) {
        return [...arr1, ...arr2];
    }
    const args1 = [[1, 2, 3], [4, 5, 6]];
    const args2 = [['labas', 'mano', 'vardas'], ['yra', 'ponas', 'krabas']];
    const args3 = [[true, true, true], [false, false, false]];
    console.log({ args: args1, result: solution(...args1) });
    console.log({ args: args2, result: solution(...args2) });
    console.log({ args: args3, result: solution(...args3) });
}
console.groupEnd();
console.group('6. Perskaitykite straipsnį apie dvipusio susieto sąrašo struktūrą(Doubly Linked List) ir parašykite implementaciją naudojant TypeScript.');
{
    console.group('6.1 Sukurkite funkciją iteruoti per dvipusį sąrašą.');
    {
    }
    console.groupEnd();
    console.group('6.2 Sukurkite funkciją iteruoti per dvipusį sąrašą atvirkščia tvarka.');
    {
    }
    console.groupEnd();
    console.group('6.3 Sukurkite funkciją paversti dvipusį sąrašą masyvu');
    {
    }
    console.groupEnd();
    console.group('6.4 Sukurkite funkciją paversti masyvą dvipusiu sąrašu');
    {
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map