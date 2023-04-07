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
var koszontesElem = document.getElementById("koszontes");
koszontesElem.innerHTML = "Szia!";
function KoszontesBeallitas() {
    var ora = new Date().getHours();
    var koszontes;
    if (ora < 9) {
        koszontes = "Jó reggelt!";
    }
    else if (ora < 18) {
        koszontes = "Szia!";
    }
    else {
        koszontes = "Jó estét!";
    }
    koszontesElem.innerHTML = koszontes;
}
setInterval(KoszontesBeallitas, 1000);
document.querySelector('.navbar-button').addEventListener('click', function () {
    document.querySelector('.animated-icon').classList.toggle('open');
});
var backToTopButton = document.querySelector("#back-to-top");
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    }
    else {
        backToTopButton.style.display = "none";
    }
};
backToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
