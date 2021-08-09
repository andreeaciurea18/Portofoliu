// Realizati un convertor astfel incat sa returnati secundele din data curenta

function getCurrentDateHour() {
    let hour = new Date();
    // Extrage ora din timpul curent
    document.getElementById("ora").innerHTML = hour.getHours();
}

function getCurrentDateMinutes() {
    let minutes = new Date();
    // Extrage minutele din timpul curent
    document.getElementById("minute").innerHTML = minutes.getMinutes();
}

function getCurrentDateSeconds() {
    let seconds = new Date();
    // Extrge secundele din timpul curent
    document.getElementById("secunde").innerHTML = seconds.getSeconds();
}