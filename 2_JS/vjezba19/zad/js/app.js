const { createApp } = Vue;
<<<<<<< HEAD
const brojPitanja = 5;
=======
>>>>>>> e6570eb29a6e29a366c8cc931fd1f74dd2caaa6c

createApp({
    data() {
        return {
            pitanjaZaKrug: [],
            indeks: 0,
            rezultat: 0,
<<<<<<< HEAD
            pokaziRezultate: false,
            brojPitanja: brojPitanja
=======
            pokaziRezultate: false
>>>>>>> e6570eb29a6e29a366c8cc931fd1f74dd2caaa6c
        }
    },
    computed: {
        // Automatski dohvaća trenutno pitanje na temelju indeksa
        trenutnoPitanje() {
            return this.pitanjaZaKrug[this.indeks] || {};
        },
        // Izračunava širinu progres trake
        progres() {
<<<<<<< HEAD
            return (this.indeks / brojPitanja) * 100;
=======
            return (this.indeks / 5) * 100;
>>>>>>> e6570eb29a6e29a366c8cc931fd1f74dd2caaa6c
        },
        // Logika ocjenjivanja prebačena u computed radi čistoće
        izracunajOcjenu() {
            const poruke = [
                'Nedovoljan (1). Ponovi osnove!',
                'Nedovoljan (1). Ponovi osnove!',
                'Dovoljan (2). Trebaš još malo učiti.',
                'Dobar (3). Solidno poznavanje.',
                'Vrlo dobar (4)! Skoro savršeno.',
                'Odličan (5)! Pravi si ES6 majstor!'
            ];
            return "Ocjena: " + poruke[this.rezultat];
        }
    },
    methods: {
        pokreniKrug() {
            // Skraćena verzija miješanja i odabira 5 unikatnih pitanja
            this.pitanjaZaKrug = [...skupPitanja]
                .sort(() => 0.5 - Math.random())
<<<<<<< HEAD
                .slice(0, brojPitanja);
=======
                .slice(0, 5);
>>>>>>> e6570eb29a6e29a366c8cc931fd1f74dd2caaa6c
            
            this.indeks = 0;
            this.rezultat = 0;
            this.pokaziRezultate = false;
        },
        obradiOdgovor(odabrano) {
            if (odabrano === this.trenutnoPitanje.tocno) {
                this.rezultat++;
            }

<<<<<<< HEAD
            if (this.indeks < brojPitanja-1) {
=======
            if (this.indeks < 4) {
>>>>>>> e6570eb29a6e29a366c8cc931fd1f74dd2caaa6c
                this.indeks++;
            } else {
                this.pokaziRezultate = true;
            }
        }
    },
    mounted() {
        this.pokreniKrug();
    }
}).mount('#app');