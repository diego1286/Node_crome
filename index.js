
const cron = require('node-cron');

const axios = require('axios');
// se deben instalar uuid  axios con npm install

// se corre con node index aca este proyecto
// con esta funcion se trae cada minuto la info del api revisar esto 
cron.schedule('*/1 * * * *', () => {
  console.log('este es el minuto');

  // hacer un metodo que guade esos datos en la BD de mongo 

axios.get('https://api.thingspeak.com/channels/1810697/feeds.json?api_key=BKUEK569AOLSNUU6&results=2')
.then(r=> console.log(r))


});

console.log("funcione que es para el grado ")