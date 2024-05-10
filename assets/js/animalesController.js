import { Leon,Lobo,Oso,Aguila,Serpiente } from "./classes.js";


export const animales = (() => {

  const __dirname = window.location
  console.log(__dirname)
  const jsonPath = './assets/animales.json';
  const imgPath = './assets/imgs/'
  const soundPath = './assets/sounds/'

  const getAll = async () => {
    try {
      const response = await fetch(jsonPath);
      const { animales } = await response.json();
      return animales;
    } catch (error) {
      console.error('Error al obtener todos los animales:', error);
    }
  };

  const getOne = async (name) => {
    try {
      const animales = await getAll();
      const animal = animales.find(animal => animal.name === name)
      return animal;
    } catch (error) {
      console.error('Error al obtener animal:', error);
    }
  };

  const create = (name, edad, imgFile, comment, soundFile) => {
    const img = imgPath + imgFile
    const sound = soundPath + soundFile
    return (
      name === "Leon" ? new Leon(edad, img, comment, sound) :
      name === "Oso" ? new Oso(edad, img, comment, sound) :
      name === "Aguila" ? new Aguila(edad, img, comment, sound) :
      name === "Lobo" ? new Lobo(edad, img, comment, sound) :
      name === "Serpiente" ? new Serpiente(edad, img, comment, sound)
      : "")
  }

  const getImgByName = async (name) => {
    try {
      const animals = await getAll()
      const { imagen } = animals.find((animal) => animal.name === name);
      return `./assets/imgs/${imagen}` //? animal.imagen : null;
    } catch (error) {
      console.error('Error al obtener la imagen del animal:', error);
    }
  };

  const getSoundByName = async (name) => {
    try {
      const animals = await getAll()
      const { sonido } = animals.find((animal) => animal.name === name);
      return `./assets/sounds/${sonido}` //? animal.imagen : null;
    } catch (error) {
      console.error('Error al obtener el sonido del animal:', error);
    }
  };

  return {
    getAll,
    getOne,
    create,
    getImgByName,
    getSoundByName
  };
})();
