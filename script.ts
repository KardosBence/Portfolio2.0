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

document.querySelector('.navbar-button').addEventListener('click', function () {

  document.querySelector('.animated-icon').classList.toggle('open');
});

const backToTopButton = document.querySelector<HTMLAnchorElement>("#back-to-top");

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
/*Nav-link Active Jquery Start*/
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 80
        }, 100);
    }
  });
});
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
    $('nav a.nav-link').removeClass('active');
    $(this).addClass('active');
  });
});
/*Nav-link Active Jquery End*/