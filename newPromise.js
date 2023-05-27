// Crear el contenedor div
const divImg = document.createElement('div');
divImg.id = 'img';
document.body.appendChild(divImg);

// Función para obtener los datos de la API y resolver la promesa
function fetchData() {
  return new Promise((resolve, reject) => {
    // Realizar el fetch a la API
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        resolve(data.results);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// Función para mostrar las imágenes en el DOM
function displayImages() {
  fetchData()
    .then(results => {
      // Iterar sobre los resultados
      results.forEach(result => {
        // Obtener la URL de la imagen del personaje
        const imageUrl = result.image;

        // Crear un nuevo elemento de imagen
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;

        // Agregar la imagen al contenedor div
        divImg.appendChild(imgElement);
      });
    })
    .catch(error => {
      console.error(error);
    });
}

// Llamar a la función para mostrar las imágenes
displayImages();