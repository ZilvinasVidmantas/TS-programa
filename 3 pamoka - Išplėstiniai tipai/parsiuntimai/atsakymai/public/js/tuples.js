"use strict";
const person1 = ["Koridas", "Atmazas"];
const person2 = ["Paklodijus", "Pagalvė"];
const person3 = ["Višta", "Maumedienė"];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
    }
    console.groupEnd();
}
console.groupEnd();
