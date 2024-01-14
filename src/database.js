//Importar moongose
import mongoose from 'mongoose'
//  Permitir que solo los campos definidos en el schema
mongoose.set('strictQuery', true)

//Crear una funcion llamada connection()
const connection = async()=>{
    try {
        //Establecer la conexion con la base de datos
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        //Presentar la conexion en consola
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        //Capturar ERROR en la conexion
        console.log(error);
    }
}

//Exportar la funcion
export default  connection