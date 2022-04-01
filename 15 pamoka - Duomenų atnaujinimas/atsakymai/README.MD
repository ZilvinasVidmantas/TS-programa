# 15 pamoka - Duomenų atnaujinimas

Tęsiame praeitos pamokos darbą naudodami tą patį projektą. Praeitos pamokos pabaiga, yra šios pamokos pradžia.
Jūsų pamokos tikslas - įgalinti duomenų atnaujinimą - egistuojančios mašinos atnaujinimą

## Eiga
### Redagavimo rėžimo UX
1. Table komponento redgavimo UX
  1. Table klasėje
    1. Sukurkite kiekvienoje eilutėje {edit} mygtuką
    2. Perduokite per props'us funkciją {onEdit}, kuri priimtų {id}
    3. Kvieskite šią funkciją paspaudusmygtuką

  2. App klasėje
    1. Sukurkite funkciją {handleCarEdit} ir perduokite ją {carTable} komponentui
    2. Sukurkite savybę {editedCarId}, kuri saugos šiuo metu redaguojamos mašinos 'id'
    3. Aprašykite {handleCarEdit} logiką jog gavus mašinos id, jis būtų nustatomas į savybe {editedCarId}. Jeigu esama {editedCarId} reikšmė lygi gautai reikšmei, nustatykite ją į null. Toks atvejis reiškia, kad buvo paspaustas tas patss mygtukas ir reikia atšaukti redagavimo rėžimą.
    4. Po funkcionalumo įgalinimo perduokite iškvieskite metodą {renderView}

  3. Table klasėje
    1. Priimkite naują props'ą {editedCarId}
    2. Atvaizduojant eilutes, užsatykite foną tai eilutei, kurios {props.editedCarId} yr lygus iteruojamos eilutės {rowData.id}
    3. {addActionsCell} metode patikrinkite ar  antru parametru gaunamas {id} sutampa su {editedCarId}. Jeigu taip, pakeiskite mygtuko tekstą į 'Cancel' ir padarykite jį kitos spalvos.

  4. App klasėje
    1. kontruktoriuje perduokite lentelėj pradinę savybės reikšmę {editedCarId}
    2. {renderView} metode kiekvieną kartą {carTable} komponentui perduokite esantį {editedCarId}

2. Formos komponento redagavimo UX
  1. CarForm klasėje
    1. Priimkite naują props'ą {isEdited}, kuris pagal šią reikšmę pakeistų:
      * submit mygtuko spalvą į 'warning'
      * uždėtų visai formai 'warning' spalvos sienelę arba šešėlį
    2. Priimkite papildoma props'ą {title} kurį naudojant nustatysite formos pavadinimą
    3. Priimkite papildoma props'ą {submitBtnText} kurį naudojant nustatysite formos mygtuko tekstą
    4. Priimkite papildoma props'ą {values} kurias naudojant nustatysite reikšmes į įvesties laukus
      * užtikrinkite, jog gavus {values} reikšmes jos perduodamos įvesties laukams

  2. App klasėje
    1. kontruktoriuje {carForm} komponentui perduokite  props'ą {isEdited}, pagal tai ar šiuo metu yra redaguojama mašina
    2. sukurkite naują metodą {handleUpdateCar} kuris priimtų tokius pat parametrus kaip {handleCreateCar}
    3. {renderView} metode formai perduokite savybes priklausomai nuo to ar redaguojama mašina
      * title
      * submitBtnText
      * isEdited: true | false
      * onSubmit: {handleUpdateCar} | {handleCreateCar}
      * values: pradinės tuščios reikšmės | redaguojamo automobilio reikšmės

### Atnaujinimo funkcionalumo įgalinimas



