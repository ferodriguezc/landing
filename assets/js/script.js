document.addEventListener('DOMContentLoaded', function () {
    var pupila = document.getElementById('pupila');

    document.addEventListener('mousemove', function (event) {
        var x = event.pageX / 1.7 / window.innerWidth * 100;
        var y = event.pageY / 1.7 / window.innerHeight * 100;

        pupila.style.left = x + '%';
        pupila.style.top = y + '%';

    });
});


document.addEventListener('DOMContentLoaded', function () {
    var parpado = document.getElementById('parpado');

    document.addEventListener("click", function (event) {
        parpado.classList.remove("animarParpado"); // Eliminar clase para reiniciar la animación
        void parpado.offsetWidth; // Truco para reiniciar la animación sin necesidad de esperar
        parpado.classList.add("animarParpado"); // Añadir clase para reproducir la animación
    });
});