"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7];
const words = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis"];
console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    function solution(arr) {
        return arr[0];
    }
    console.log({
        numbers,
        result: solution(numbers)
    });
    console.log({
        words,
        result: solution(words)
    });
}
console.groupEnd();
console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
    function solution(arr) {
        return arr.shift();
    }
    console.log({
        numbers,
        result: solution(numbers)
    });
    console.log({
        words,
        result: solution(words)
    });
}
console.groupEnd();
console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    function solution(arr) {
        return arr[arr.length - 1];
    }
    console.log({
        numbers,
        result: solution(numbers)
    });
    console.log({
        words,
        result: solution(words)
    });
}
console.groupEnd();
console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
    function solution(arr) {
        return arr.pop();
    }
    console.log({
        numbers,
        result: solution(numbers)
    });
    console.log({
        words,
        result: solution(words)
    });
}
console.groupEnd();
console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
    function solution(arr) {
        return arr.length;
    }
    console.log({
        numbers,
        result: solution(numbers)
    });
    console.log({
        words,
        result: solution(words)
    });
}
console.groupEnd();
console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    function solution(arr) {
        console.log(arr.length - 1);
    }
    console.log(numbers);
    solution(numbers);
    console.log(words);
    solution(words);
}
console.groupEnd();
console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    function solution(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(i);
    }
    console.log(numbers);
    solution(numbers);
    console.log(words);
    solution(words);
}
console.groupEnd();
console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    function solution(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(arr[i]);
    }
    console.log(numbers);
    solution(numbers);
    console.log(words);
    solution(words);
}
console.groupEnd();
console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
    function solution(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(`[${i}] => ${arr[i]}`);
    }
    console.log(numbers);
    solution(numbers);
    console.log(words);
    solution(words);
}
console.groupEnd();
console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    function solution(arr) {
        for (let i = arr.length - 1; i >= 0; i--)
            console.log(arr[i]);
    }
    console.log(numbers);
    solution(numbers);
    console.log(words);
    solution(words);
}
console.groupEnd();
console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    function solution(arr) {
        const res = arr.map((_, i) => i).join(' ');
        console.log(res);
    }
    console.log(numbers);
    solution(numbers);
    console.log(words);
    solution(words);
}
console.groupEnd();
console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    function solution(arr) {
        const res = arr.join(' ');
        console.log(res);
    }
    console.log(numbers);
    solution(numbers);
    console.log(words);
    solution(words);
}
console.groupEnd();
console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
    function solution(arr) {
        const res = arr.map((x, i) => `[${i}]=>${x} `).join(', ');
        console.log(res);
    }
    console.log(numbers);
    solution(numbers);
    console.log(words);
    solution(words);
}
console.groupEnd();
//# sourceMappingURL=main.js.map