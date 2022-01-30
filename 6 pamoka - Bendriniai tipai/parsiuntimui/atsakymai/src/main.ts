const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const words: string[] = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];

console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function solution<Type>(arr: Type[]): Type {
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
  function solution<Type>(arr: Type[]): Type | undefined {
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
  function solution<Type>(arr: Type[]): Type | undefined {
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
  function solution<Type>(arr: Type[]): Type | undefined {
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
  function solution(arr: Array<any>): number {
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