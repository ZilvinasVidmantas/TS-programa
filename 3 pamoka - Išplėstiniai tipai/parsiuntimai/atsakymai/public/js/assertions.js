"use strict";
const someNumber = 17;
const title = "Grace";
const formAddUser = document.querySelector('#form-add-user');
formAddUser.onsubmit = (e) => {
    e.preventDefault();
    console.log('Ateityje pridėsiu vartotoją');
};
console.group('Assertions - užduotys');
{
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
    }
    console.groupEnd();
}
console.groupEnd();
