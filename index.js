const log4js = require('log4js');

const logger = log4js.getLogger("app.log");
logger.level = "error";

logger.debug("Iniciando la aap en modo pruebas.");
logger.info("Usuario ha inviado sesión.");
logger.warn("Falta el archivo config de la app.");
logger.error("No se pudo ejecutar la ación.");
logger.fatal("No se pudo iniciar la aplicación.");

function sumar(x,y){
    return x+y;
}

let vriable_mal_escrita = 0;
module.exports = sumar;
