//Exportar la variable app
import app from './server.js'

//Importar la funcion connection()
import connection from './database.js';
//Haicned uso de la funcion connection()
connection()

//Iniciar el servidor en el puerto 3000
app.listen(3000,()=>{
    console.log(`Server on port ${3000}`);
})