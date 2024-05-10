import { animales } from "./animalesController.js";


const $tabla = document.querySelector('#Animales')
const $previewImg =  document.getElementById("preview")
const $formularioBtn = document.getElementById("btnRegistrar")
const $nombreInput =  document.getElementById("animal")
const $edadInput =  document.getElementById("edad")
const $comentariosInput =  document.getElementById("comentarios")





export const createAnimalCard = (imgSrc="", soundSrc="") =>{
    const card= `
            <div class="card mx-2" style="width: 9rem;">
                <img src=${imgSrc} class="card-img-top" alt="...">
                <audio class="btn btn-secondary" src="${soundSrc}"></audio>
                <button">Play</button> 
            </div>    
            `
    return card
    
}

export const submitAnimalHandler = (e) => {
    console.log("submitido")
    const nombre = $nombreInput.value
    console.log(nombre)
    const imgSrc = animales.getImgByName()
    console.log(nombre)

    const animalCard = createAnimalCard()
    $tabla.innerHTML += animalCard
}