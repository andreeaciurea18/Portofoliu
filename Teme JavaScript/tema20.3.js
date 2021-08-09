// Tema 3(suplimentara): Realizati un script care sa afiseze cate zile, ore, minute sunt pana la un eveniment, in cazul nostru de la ziua curenta pana la anul nou

// Versiunea 1
function DateDiff(d1, d2) {
    var d1 = new Date(); // data din momentul de fata
    var d2 = new Date(2020, 12, 01, 00, 00, 00); // 01.01.2021 00:00:00


    var diff = d2 - d1,
        sign = diff < 0 ? -1 : 1,
        milliseconds, seconds, minutes, hours, days;

    diff /= sign; // sau diff=Math.abs(diff);
    diff = (diff - (milliseconds = diff % 1000)) / 1000;
    diff = (diff - (seconds = diff % 60)) / 60;
    diff = (diff - (minutes = diff % 60)) / 60;
    days = (diff - (hours = diff % 24)) / 24;

    document.write(sign === 1 ? "Pana la Anul Nou au mai ramas: " : "Remains: ",
        days + " zile, ",
        hours + " ore, ",
        minutes + " minute, ",
        seconds + " secunde, ",
        milliseconds + " milisecunde." + "<br>" + "<br>");
}

DateDiff();


// Versiunea 2
function dateDiff() {
    const today = new Date();
    const endDate = new Date("January 01, 2021 00:00:00");

    const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
    const hours = parseInt(Math.abs(endDate - today) / (1000 * 60 * 60) % 24);
    const minutes = parseInt(Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60) % 60);
    const seconds = parseInt(Math.abs(endDate.getTime() - today.getTime()) / (1000) % 60);

    document.write("Pana la Anul Nou mai sunt: " + days + " zile " + hours + " ore " + minutes + " minute " + +seconds + " secunde" + ".");
}
dateDiff();