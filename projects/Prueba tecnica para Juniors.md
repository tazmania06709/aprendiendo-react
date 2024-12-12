# Prueba tecnica para Juniors y Trainees de React en Live Coding

APIs:

- Facts Random: https:// catfact.ninja/fact   MD834/no-bare-urls: Bare URL used 
- Imagen random: https://cataas.com/cat/says/hello    MD034/no-bare-urls: Bare URL used


Recupera un hecho aleatorio de gatos y muestra una imagen de un gato con la primera pala del hecho.





fetch('https://catfact.ninja/fact'):

fetch es una función que permite hacer solicitudes HTTP (como obtener datos de un servidor o enviar datos a una API).
En este caso, realiza una solicitud GET a la URL 'https://catfact.ninja/fact', que es una API que devuelve un hecho aleatorio sobre gatos.
fetch devuelve una promesa (Promise), que se resuelve cuando la respuesta del servidor está disponible.
.then(res => res.json()):

.then es un método utilizado para manejar la promesa cuando se resuelve.
res es el objeto de respuesta de la solicitud HTTP. Aquí, res es la respuesta de la API.
res.json() convierte la respuesta (que generalmente está en formato JSON) en un objeto JavaScript. Este es otro paso asíncrono, por lo que json() también devuelve una promesa.
.then(data => { setFact(data.fact) }):

Después de que la respuesta JSON se convierte a un objeto JavaScript, el siguiente .then maneja ese objeto.
data es el objeto que contiene la respuesta JSON. En este caso, la respuesta incluye un campo llamado fact, que es el hecho sobre gatos que hemos solicitado.
setFact(data.fact) es una llamada a una función (probablemente un hook de React, si estás trabajando con React) que actualiza el estado de la aplicación con el hecho obtenido de la API.
data.fact accede al valor del hecho dentro de la respuesta JSON.
setFact probablemente actualizará el estado local de un componente, lo que a su vez hará que se renderice el hecho sobre el gato en la interfaz de usuario.
