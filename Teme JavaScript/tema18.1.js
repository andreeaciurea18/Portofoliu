// Definire Clasa
class caine {
    constructor(nume, varsta, culoare) {
            this._nume = nume;
            this._varsta = varsta;
            this._culoare = culoare;
        }
        // Definesti metode
    get nume() {
        return this._nume;
    }
    get varsta() {
        return this._varsta;
    }
    get culoare() {
        return this._culoare;
    }

};

class BullDog extends caine {
    constructor(nume, varsta, culoare, regiune, sperantaViata, talie) {
        super(nume, varsta, culoare);
        this._regiune = regiune;
        this._sperantaViata = sperantaViata;
        this._talie = talie;
    }
};

const Athos = new BullDog("Athos", "1.6 ani", "galben/negru", "Germania", "13 ani", "mica");
document.write(`<br> <br> Cainele  ${Athos._nume} are varsta de ${Athos._varsta}, culoarea ${Athos._culoare}, 
este din ${Athos._regiune}, are speranta de viata de ${Athos._sperantaViata} si este de talie ${Athos._talie}.`);