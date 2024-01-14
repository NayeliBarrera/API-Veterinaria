// Importar Router de express
import {Router} from 'express'

//Crear una instancia de Router()
const router = Router()
// Importar los metodos del controlador
import {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario_controller.js";

//Definir las rutas
//Ruta para el login
router.post('/login',(req,res)=>res.send("login"))

//Ruta para el Registro

router.post('/registro',(req,res)=>res.send("registro"))

//Ruta para confirmar el correo

router.get('/confirmar/:token',(req,res)=>res.send("confirmar email"))

//Ruta para listar veterinarios

router.get('/veterinarios',(req,res)=>res.send("lista de veterinarios"))

//Ruta para recuperar el password

router.get('/recuperar-password',(req,res)=>res.send("enviar mail"))

//Ruta recuperar el password con el token

router.get('/recuperar-password/:token',(req,res)=>res.send("verificar token"))

//Ruta para el nuevo password

router.post('/nuevo-password/:token',(req,res)=>res.send("crear password"))

//Ruta para mostrar el perfil del usuario
router.get('/perfil',(req,res)=>res.send("perfil"))

//Ruta para actualizar el password
router.put('/veterinario/actualizarpassword',(req,res)=>res.send("actualizar password"))

//Ruta para mostrar el detalle de un veterinario en particular

router.get('/veterinario/:id',(req,res)=>res.send("detalle del veterinario"))

//Ruta para actualizar un veterinario en particular

router.put('/veterinario/:id',(req,res)=>res.send("actualizar perfil"))


router.post("/login", login);
router.post("/registro", registro);
router.get("/confirmar/:token", confirmEmail);
router.get("/veterinarios", listarVeterinarios);
router.get("/recuperar-password", recuperarPassword);
router.get("/recuperar-password/:token", comprobarTokenPasword);
router.post("/nuevo-password/:token", nuevoPassword);

router.get("/perfil", perfil);
router.put('/veterinario/actualizarpassword',actualizarPassword)
router.get("/veterinario/:id", detalleVeterinario);
router.put("/veterinario/:id", actualizarPerfil);

//Exportar la variable router
export default router