# Práctica| Mi primera aplicación con NPM

This program is a Node.js aplication introductory to the use of dependencies in a project, specifically, "log4js" for logging, "mocha" for code testing, "eslint" for code analysis, and "supervisor", an automatic restart server tool.  

## Getting Started

To get a copy if this project you can click the following link to download the source files
https://github.com/Esteban-J/Practica-Mi-primera-aplicacion-con-NPM/archive/refs/heads/main.zip

### Prerequisites

To run and test this code you must have node install on your local machine. Follow the next link to see instructions on how to install node on your operative system.

https://nodejs.org/en/download/package-manager

### Installing

Once having installed node, run the following command on your root directory of the project to download the node_modules (dependencies) needed.

```
npm install
```

## Running the tests

To run an implementation of "log4js" use the following command:

```
node index.js
```

To run an implementation of "mocha" use:

```
npm run test
```

To run an implementation of "eslint" use:

```
npm run lint
```

And to run an implementation of the "supervisor" tool use:

```
supervisor index.js
```

### Dependencies break down

"log4js" is a logging library for Node.js that provides a flexible and powerful way to manage application logs.

In this aplication we have the following log levels:
```
logger.debug("Iniciando la app en modo pruebas.");
logger.info("Usuario ha iniciado sesión.");
logger.warn("Falta el archivo config de la app.");
logger.error("No se pudo ejecutar la ación.");
logger.fatal("No se pudo iniciar la aplicación.");
```

Change this line inside index.js to establish the level of logging to deploy.

```
logger.level = "debug";
```

"mocha" is a popular testing framework for Node.js, designed to run tests for JavaScript code in a flexible and straightforward way. 

We invite you to analize the code inside indexTest.js and run the command for testing mocha to see what kind of test is being done.

"eslint" is a widely used tool for identifying and fixing problems in JavaScript code. It is a static code analysis tool that helps enforce coding standards and catch errors or potential issues early in the development process.

We invite you to analyze the ".eslintrc.json" file to see what kind of code enforcements are being applied.

Finally "supervisor" is a utility used for automatically restarting Node.js applications when file changes are detected. It's especially useful during development, as it helps ensure that your application is always running the latest code without needing to manually restart the server every time you make a change.

We invite you to test supervisor with the command given above and see what happens when you change the code.

## Built With

* [NPM](https://www.npmjs.com/) - Dependency Management

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Esteban-J/Practica-Mi-primera-aplicacion-con-NPM/tags). 

## Authors

* **GERARDO ESTEBAN JURADO CARRERA**

## License

This project is licensed under the ISC License

## Acknowledgments

* LUIS ANTONIO RAMIREZ MARTINEZ

