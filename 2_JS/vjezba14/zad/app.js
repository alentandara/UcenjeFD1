function* tijekUpoznavanja() {
    // 1. KORAK: Tražimo ime
    const ime = yield { 
        naslov: 'Tko si ti?', 
        opis: 'Prvo nam reci svoje ime kako bismo znali s kim pričamo.', 
        prikaziUnos: true 
    };

    // 2. KORAK: Tražimo godine
    const godine = yield { 
        naslov: `Drago nam je, ${ime}!`, 
        opis: 'Koliko imaš godina?', 
        prikaziUnos: true 
    };

    // 3. KORAK: Tražimo grad
    const grad = yield { 
        naslov: `To su najbolje godine, ${ime}!`, 
        opis: 'Iz kojeg grada dolaziš?', 
        prikaziUnos: true 
    };

    // 4. ZAVRŠNA PORUKA
    return { 
        naslov: 'Sve je spremno!', 
        opis: `Pozdrav za ${ime} iz grada ${grad} s ${godine} godina. Uspješno ste završili proces!`, 
        prikaziUnos: false,
        gotovo: true 
    };
}


// Inicijalizacija
const tijek = tijekUpoznavanja();
const naslovElement = document.getElementById('glavni-naslov');
const opisElement = document.getElementById('glavni-opis');
const kontejnerUnosa = document.getElementById('kontejner-unosa');
const poljeZaUnos = document.getElementById('polje-za-unos');

let zadnjiUnosKorisnika = '';

/**
 * FUNKCIJA: izvrsiSljedeciKorak
 * Budi generator i ažurira UI
 */
function izvrsiSljedeciKorak() {

    zadnjiUnosKorisnika = poljeZaUnos.value.trim();
    poljeZaUnos.value = '';

    const rezultat = tijek.next(zadnjiUnosKorisnika);

    if (!rezultat.done) {
        const podaci = rezultat.value;

        naslovElement.innerText = podaci.naslov;
        opisElement.innerText = podaci.opis;

        if (podaci.prikaziUnos) {
            kontejnerUnosa.classList.remove('skriveno');
            poljeZaUnos.focus(); // automatski fokus
        } else {
            kontejnerUnosa.classList.add('skriveno');
        }

    } else {
        // Završetak
        const konacniPodaci = rezultat.value;

        naslovElement.innerText = konacniPodaci.naslov;
        opisElement.innerText = konacniPodaci.opis;

        kontejnerUnosa.classList.add('skriveno');
    }
}


// ENTER tipka pokreće sljedeći korak
poljeZaUnos.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && !kontejnerUnosa.classList.contains('skriveno')) {
        event.preventDefault();
        izvrsiSljedeciKorak();
    }
});


// Pokretanje prvog koraka odmah pri učitavanju
izvrsiSljedeciKorak();