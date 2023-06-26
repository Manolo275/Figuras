function circulo(){
    let figura=document.getElementById("figura");
    figura.classList.remove("rectangulo","triangulo");
    figura.classList.toggle("circulo");

}
function rectangulo(){
    let figura=document.getElementById("figura");
    figura.classList.remove("circulo","triangulo","girar");
    figura.classList.toggle("rectangulo");
}
function triangulo(){
    let figura=document.getElementById("figura");
    figura.classList.remove("circulo","rectangulo","girar");
    figura.classList.toggle("triangulo");
}
function girar(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("girar");
}
function arriba(){
    let figura=document.getElementById("figura");
    figura.classList.remove("girar","abajo");
    figura.classList.toggle("arriba");
}
function abajo(){
    let figura=document.getElementById("figura");
    figura.classList.remove("girar","arriba");
    figura.classList.toggle("abajo");
}
function izquierda(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("izquierda");
}
function derecha(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("derecha");
}
function ocultar(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("ocultar");
}
function gif(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("gif");
}
function degradado() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("degradado");
    figura.classList.remove("circulo", "rectangulo", "triangulo", "gif");
}
function panelIzq() {
    const panelIzq = document.querySelector(".panelIzq");
    panelIzq.classList.toggle("activoI");
}
function panelA() {
    const panelA = document.querySelector(".panelA");
    panelA.classList.toggle("activoA");
}
// transform: rotate()
// transform: translate-y()
// linear-gradient