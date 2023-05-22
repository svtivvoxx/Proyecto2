
function cambiarColorTexto() {
    var elementosTexto = document.getElementsByClassName("Texto");
    var backgroundColor = document.body.style.backgroundColor;
    var textColor = 'white'; 


    if (backgroundColor === 'black') {
        textColor = 'white';
    } else {
        textColor = 'black';
    }


    for (var i = 0; i < elementosTexto.length; i++) {
        elementosTexto[i].style.color = textColor;
    }
}

window.addEventListener('load', function () {
    cambiarColorTexto();
});





