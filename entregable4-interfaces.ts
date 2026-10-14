interface CasoDePrueba {
    id: number;
    titulo: string;
    estado: "Pass" | "Fail";
}

const casouno: CasoDePrueba = {
id: 1,
titulo: "Iniciar sesion",
estado: "Pass",
};

const casodos: CasoDePrueba = {
    id:2,
    titulo: "Cerrar sesion desde menú",
    estado: "Fail",
};

console.log(casouno);
console.log(casodos);

export{};