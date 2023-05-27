  // Crear el contenedor div
const divImg = document.createElement('div');
divImg.id = 'img';
document.body.appendChild(divImg);

// Realizar el fetch a la API
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    // Iterar sobre los resultados
    console.log(data)
    data.results.forEach(result => {
      // Obtener la URL de la imagen del personaje
      const imageUrl = result.image;

      // Crear un nuevo elemento de imagen
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;

      // Agregar la imagen al contenedor div
      divImg.appendChild(imgElement);
    });
  })
  .catch(error => console.error(error, "No se pudo realizar la operacion"));