class Vehiculo {
    marca;
    modelo;
    velocidad;
    constructor({ marca, modelo, velocidad}) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    acelerar() {
        return `Velocidad = ${this.velocidad*10} [km/h]🚗💨`
    }
}

class Coche extends Vehiculo {
    combustible;
    constructor({ marca, modelo, velocidad }) {
        super({marca, modelo, velocidad})
        this.combustible = combustible;
    }
    acelerar() {
        return `Velocidad = ${this.velocidad*20} [km/h]🚗💨`
    }

    static convertirKmHEnMph(p1){
        return `Velocidad = ${(p1/1.60934).toFixed(2)} [Mph]`;
    }
}

const Tipo = document.getElementById("tipo");

document.addEventListener("change", (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const Combustible = document.getElementById("combustible");
    const BtnConvertir = document.getElementById("convertir");

    if (e.target.id == "tipo") {
        if (Tipo.value == "vehiculo") {
            Combustible.style.display = "none";
            BtnConvertir.style.display = "none";
            
        } else if (Tipo.value == "coche") {
            Combustible.style.display = "block";
            BtnConvertir.style.display = "block";
            
        } else {
            Combustible.style.display = "none";
            BtnConvertir.style.display = "none";         
        }
    }
});

document.addEventListener("click", e => {
    let newMarca = document.getElementById("marca").value;
    let newModelo = document.getElementById("modelo").value;
    let newVelocidad = document.getElementById("velocidad").value;
    let newCombustible = document.getElementById("combustible").value;
    if (e.target.id == "acelerar") {
        if(Tipo.value == "vehiculo"){
            const newVehiculo = new Vehiculo({ marca: newMarca, modelo: newModelo, velocidad: newVelocidad});
            document.getElementById("text").innerHTML = `${newVehiculo.acelerar()}`;
        } else if (Tipo.value == "coche"){
            const newCoche = new Coche({ marca: newMarca, modelo: newModelo, velocidad: newVelocidad, combustible: newCombustible});
            document.getElementById("text").innerHTML = `${newCoche.acelerar()}`;
        }
        
    } else if (e.target.id == "convertir") {
        const newCoche = new Coche({ marca: newMarca, modelo: newModelo, velocidad: newVelocidad, combustible: newCombustible});
        document.getElementById("text").innerHTML = `${Coche.convertirKmHEnMph(newCoche.velocidad)}`;
    }
})