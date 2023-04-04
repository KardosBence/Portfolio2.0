var aktYear = new Date().getFullYear();
var aktYearElem = document.getElementById("aktYear");
aktYearElem.innerHTML = aktYear;


/*let aktDatum: string = formatDate(new Date());

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

function formatDate(aktDatum: Date) {
    return (
        [
            aktDatum.getFullYear(),
            padTo2Digits(aktDatum.getMonth() + 1),
            padTo2Digits(aktDatum.getDate()),
        ].join('-') +
        ' ' +
        [
            padTo2Digits(aktDatum.getHours()),
            padTo2Digits(aktDatum.getMinutes()),
            padTo2Digits(aktDatum.getSeconds()),
        ].join(':')
    );
}

const aktDatumElem = document.getElementById("aktDatum");

setInterval(() => {
    aktDatum = formatDate(new Date());
    aktDatumElem.innerHTML = "Mai dátum: " + aktDatum;
}, 1000);*/

var koszontesElem: HTMLElement = document.getElementById("koszontes");
koszontesElem.innerHTML = "Szia!";

function KoszontesBeallitas() {
  const ora: number = new Date().getHours();
  let koszontes: string;
  if (ora < 9) {
    koszontes = "Jó reggelt!";
  } else if (ora < 18) {
    koszontes = "Szia!";
  } else {
    koszontes = "Jó estét!";
  }
  koszontesElem.innerHTML = koszontes;
}

setInterval(KoszontesBeallitas, 1000);