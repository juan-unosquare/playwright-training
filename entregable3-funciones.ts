
function evaluarPrueba(resultado: string): void{
if(resultado === "Exitoso") {
    console.log("La prueba ha pasado correctamente");
}else{
    console.log("La prueba no ha pasaod correctamente");
}
}

const nombreDePrueba: string = "Entregable3";
const resultado: string = "Exitoso";

console.log(nombreDePrueba);
evaluarPrueba(resultado);

export{};
