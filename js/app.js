/* ELEMENTOS */
var botonAtras = document.querySelector('#barra-superior>.boton-atras');
var botonMenu = document.querySelector('#barra-superior>.boton-menu');
var menuLateral = document.querySelector('#menu-lateral');


/* REGISTRAR EVENTOS */
// Click en boton atras
botonAtras.addEventListener('click', function(e){
    volverAtras();
});
// Click en boton menu
botonMenu.addEventListener('click', function(e){
    abrirCerrarMenu();
});

/* FUNCIONES */
// Ir atras
function volverAtras(){
    window.history.back();
}
// Abrir menú
function abrirCerrarMenu(){
    menuLateral.classList.toggle('menu-abierto');
}
