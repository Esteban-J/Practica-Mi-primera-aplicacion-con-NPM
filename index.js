const log4js = require('log4js');

const logger = log4js.getLogger("app.log");
logger.level = "debug";

logger.debug("Iniciando la app en modo pruebas.");
logger.info("Usuario ha iniciado sesión.");
logger.warn("Falta el archivo config de la app.");
logger.error("No se pudo ejecutar la ación.");
logger.fatal("No se pudo iniciar la aplicación.");

function sumar(x,y){
    return x+y;
}

let vriable_mal_escrita = 0;
module.exports = sumar;
