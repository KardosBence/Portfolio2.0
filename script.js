var aktYear = new Date().getFullYear();
var aktYearElem = document.getElementById("aktYear");
aktYearElem.innerHTML = aktYear;

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

var backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100) { // Ha az ablak tetejétől mért távolság nagyobb, mint 100px
    backToTopButton.style.display = "block"; // Akkor megjelenik a gomb
  } else {
    backToTopButton.style.display = "none"; // Ellenkező esetben elrejtődik
  }
});

backToTopButton.addEventListener("click", function() {
  window.scrollTo(0, 0); // A dokumentum tetejére animálja az ablakot
});

/*Nav-link Active Jquery Start*/
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 100);
        }
    });
});
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        $('nav a.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});
/*Nav-link Active Jquery End*/ 
