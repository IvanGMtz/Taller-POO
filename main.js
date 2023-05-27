class Empleado {
    nombre;
    edad;
    sueldo;
    static id;
    constructor({ nombre, edad, sueldo, id}) {
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        this.id=id
    }
    calcularSalarioAnual() {
        return `Salario anual = $${(this.sueldo*12).toLocaleString()}`
    }

}

class Gerente extends Empleado {
    constructor({ nombre, edad, sueldo }) {
        super({nombre, edad, sueldo})
    }
    calcularSalarioAnual() {
        return `Salario anual = $${(this.sueldo*12*1.1).toLocaleString()}`
    }
}

const Tipo = document.getElementById("tipo");

document.addEventListener("click", e => {
    let newnombre = document.getElementById("nombre").value;
    let newedad = document.getElementById("edad").value;
    let newsueldo = document.getElementById("sueldo").value;

    const newEmpleado = new Empleado({ nombre: newnombre, edad: newedad, sueldo: newsueldo});
    const newGerente = new Gerente({ nombre: newnombre, edad: newedad, sueldo: newsueldo, combustible: newCombustible});

    if (e.target.id == "calcular") {
        if(Tipo.value == "empleado"){
            document.getElementById("text").innerHTML = `${newEmpleado.calcularSalarioAnual()}`;
        } else if (Tipo.value == "gerente"){
            
            document.getElementById("text").innerHTML = `${newGerente.calcularSalarioAnual()}`;
        }
        
    }
})