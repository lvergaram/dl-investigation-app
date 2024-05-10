import { animales } from "./animalesController.js";

const $formularioBtn = document.getElementById("btnRegistrar")
const $nombreInput =  document.getElementById("animal")
const $edadInput =  document.getElementById("edad")
const $comentariosInput =  document.getElementById("comentarios")
const $previewImg =  document.getElementById("preview")

const $tabla = document.querySelector('#Animales')
const $formAlert = document.querySelector("#formAlert")

const $modalImg = document.querySelector("#modalImg")
const $modalAge = document.querySelector("#modalAge")
const $modalComment = document.querySelector("#modalComment")

// registro animales
let registroAnimales = []

// helpers
const renderPreviewImg = async(animal) => {
    const {imagen} = await animales.getOne(animal)
    $previewImg.style.backgroundImage =  `url(./assets/imgs/${imagen})`
}


const renderAnimals=() => {
    $tabla.textContent = ''
    registroAnimales.forEach( (animal,index) => {
        const img =  animal.img
        const sonido=  animal.sonido
        $tabla.innerHTML += `
        <div id="card-img${index}" class="card mx-2" >
            <img src=${img} index="${index}" class="card-img-top" alt="imagen de ${img}">
            
            <button soundSrc="${sonido}" class="sonido btn btn-secondary">🔊
            <audio src="${sonido}"></audio>
            </button> 
        </div>    
        `
    })    
}

const resetForm = () => {
    $nombreInput.value = ""
    $edadInput.value  = ""
    $comentariosInput.value = ""
    $formAlert.classList.add("d-none")
    $previewImg.style.backgroundImage =  "url(./assets/imgs/lion.svg)"
}

// event listener
const clickCardHandler = (e) => {
    
    if(e.target.tagName === 'IMG'){
        const animalIndex = e.target.getAttribute("index")
        const {edad,img,comentario} = registroAnimales[animalIndex]
        
        $modalAge.textContent = edad
        $modalComment.textContent = comentario
        $modalImg.setAttribute("src",img)
       
        $('#animalModal').modal('show')
    }   
  
    
    if(e.target.tagName === 'BUTTON'){
        const sonidoTag = e.target.querySelector('audio')
        sonidoTag.play()
    }   
}


const selectAnimalHandler = (e) => {
    const nombre = e.target.value
    renderPreviewImg(nombre)
}


const submitAnimalHandler = async(e) => {

    const {value:nombre} = $nombreInput
    const {value:edad} = $edadInput
    const {value:comentario} = $comentariosInput
    
    // validation
    if(!comentario || !nombre ||!edad){
        $formAlert.classList.remove("d-none")
        return
    }

    const {imagen,sonido} = await animales.getOne(nombre) 

    const animal = animales.create(nombre,edad,imagen,comentario,sonido) 
    registroAnimales.push(animal)
    
    renderAnimals()
    resetForm()
}




// events
document.addEventListener('DOMContentLoaded', function() {

    $tabla.addEventListener("click",clickCardHandler)
    $nombreInput.addEventListener("change",selectAnimalHandler)
    $formularioBtn.addEventListener("click",submitAnimalHandler)

  })
