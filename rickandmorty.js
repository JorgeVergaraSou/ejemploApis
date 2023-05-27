// Crear el contenedor div
const divTarjeta = document.createElement('div');
divTarjeta.id = 'tarjeta';
document.body.appendChild(divTarjeta);


// Función asincrónica para obtener y mostrar las imágenes
async function fetchAndDisplayImages() {
  try {
    // Realizar el fetch a la API
    const response = await fetch('https://rickandmortyapi.com/api/character');

    const data = await response.json();
    console.log(data);
    // Iterar sobre los resultados
    for (const result of data.results) {
      const divImg = document.createElement('div');
      divImg.id = 'img';
      // Obtener informacion del personaje
      const imageUrl = result.image;
      const nameApi = result.name;
      const razaApi = result.species;

//imagen
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;

//info texto nombre      
      h5Element = document.createElement("h5");
      contenido = document.createTextNode("Name: " + nameApi);
      h5Element.appendChild(contenido);

// info specia
      h5Especie = document.createElement("h5");
      contenidoSpecie = document.createTextNode("Species: " + razaApi);
      h5Especie.appendChild(contenidoSpecie);

      // Agregar al contenedor div
      divImg.appendChild(h5Element);
      
      divImg.appendChild(h5Especie);
      divImg.appendChild(imgElement);

      divTarjeta.appendChild(divImg);
    }
  } catch (error) {
    console.error(error, "no se pudo resolver la peticion");
  }
}

// Llamar a la función asincrónica
fetchAndDisplayImages();