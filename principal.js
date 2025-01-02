const nav = document.querySelector(".contenedor-menu");
const abrir = document.querySelector("#btn-abrir");
const cerrar = document.querySelector("#btn-cerrar");


abrir. addEventListener("click", ()=>{
    console.log("Abrir")
    nav.classList.add("visible");

})


cerrar. addEventListener("click", ()=>{
    nav.classList.remove("visible");

})