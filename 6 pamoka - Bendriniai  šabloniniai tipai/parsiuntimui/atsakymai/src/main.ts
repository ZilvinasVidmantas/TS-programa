type PrimitiveType = string | number | boolean;

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const strings: string[] = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];
const booleans: boolean[] = [true, true, true, true, false];

console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function solution<Type>(arr: Type[]): Type | undefined {
    return arr[0];
  }

  console.log({ numbers, result: solution(numbers) });
  console.log({ strings, result: solution(strings) });
  console.log({ booleans, result: solution(booleans) });
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function solution<Type>(arr: Type[]): Type | undefined {
    return arr[arr.length - 1];
  }

  console.log({ numbers, result: solution(numbers) });
  console.log({ strings, result: solution(strings) });
  console.log({ booleans, result: solution(booleans) });
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  function solution<Type extends PrimitiveType>(arr: Type[]): Type[] {
    const copy: Type[] = arr.map(x => x);
    return copy;
  }

  console.log({ numbers, result: solution(numbers) });
  console.log({ strings, result: solution(strings) });
  console.log({ booleans, result: solution(booleans) });
}
console.groupEnd();

console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  // ('a', 2) -> ['a', 'a']
  // (77, 4) -> [77, 77, 77, 77]
  // (true, 1) -> [true]

  function solution<T extends PrimitiveType>(value: T, count: number): Array<T> {
    return Array.from(new Array(count)).map(_ => value);
  }

  // Spausdinimas
  type ArgumentSample = [PrimitiveType, number];

  const dataSamples: ArgumentSample[] = [
    ['a', 2],
    [77, 4],
    [true, 1],
  ];

  dataSamples.forEach(
    (args) => console.log(
      `solution(${args.join(', ')}):`,
      solution(...args)
    )
  );
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  function solution<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return [...arr1, ...arr2];
  }

  // Spausdinimas
  type ArgumentSample<T> = [T[], T[]];

  const args1: ArgumentSample<number> = [[1, 2, 3], [4, 5, 6]];
  const args2: ArgumentSample<string> = [['labas', 'mano', 'vardas'], ['yra', 'ponas', 'krabas']];
  const args3: ArgumentSample<boolean> = [[true, true, true], [false, false, false]];

  console.log({ args: args1, result: solution(...args1) });
  console.log({ args: args2, result: solution(...args2) });
  console.log({ args: args3, result: solution(...args3) });
}
console.groupEnd();

console.group('6. Perskaitykite straipsnį apie dvipusio susieto sąrašo struktūrą(Doubly Linked List) ir parašykite implementaciją naudojant TypeScript.');
// straipsnis: https://en.wikipedia.org/wiki/Doubly_linked_list
{

  console.group('6.1 Sukurkite funkciją iteruoti per dvipusį sąrašą.');
  // straipsnis: https://en.wikipedia.org/wiki/Doubly_linked_list
  {


  }
  console.groupEnd();

  console.group('6.2 Sukurkite funkciją iteruoti per dvipusį sąrašą atvirkščia tvarka.');
  // straipsnis: https://en.wikipedia.org/wiki/Doubly_linked_list
  {


  }
  console.groupEnd();

  console.group('6.3 Sukurkite funkciją paversti dvipusį sąrašą masyvu');
  // straipsnis: https://en.wikipedia.org/wiki/Doubly_linked_list
  {


  }
  console.groupEnd();

  console.group('6.4 Sukurkite funkciją paversti masyvą dvipusiu sąrašu');
  // straipsnis: https://en.wikipedia.org/wiki/Doubly_linked_list
  {


  }
  console.groupEnd();


}
console.groupEnd();

