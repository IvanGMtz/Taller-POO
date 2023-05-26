class Animal {
    name;
    age;
    constructor({ name, age}) {
        this.name = name;
        this.age = age;
    }
    hacerSonido() {
        return `Hola me llamo ${this.name} y tengo ${this.age} meses, estoy chillando🔊`
    }
}

class perro extends Animal {
    breed;
    constructor({ name, age, breed }) {
        super({ name, age})
        this.breed = breed;
    }
    moverCola() {
        return `, mi raza es ${this.breed} 🐕(mueve la cola).`;
    }
}

document.addEventListener("change", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const Tipo = document.getElementById("tipo");
    const Raza = document.getElementById("breed");
    const Btnperro = document.getElementById("perro");
    const BtnSaludar= document.getElementById("saludar");

    if (e.target.id == "tipo") {
        if (Tipo.value == "animal") {
            Raza.style.display = "none";
            Btnperro.style.display = "none";
            BtnSaludar.style.display = "block";
        } else if (Tipo.value == "dog") {
            Raza.style.display = "block";
            Btnperro.style.display = "block";
            BtnSaludar.style.display = "none";
        } else {
            Raza.style.display = "none";
            Btnperro.style.display = "none";
        }
    }
});

document.addEventListener("click", e => {
    let newName = document.getElementById("name").value;
    let newAge = document.getElementById("age").value;
    let newBreed = document.getElementById("breed").value;
    if (e.target.id == "saludar") {
        const newAnimal = new Animal({ name: newName, age: newAge});
        document.getElementById("text").innerHTML = `${newAnimal.hacerSonido()}`;
    } else if (e.target.id == "perro") {
        const newperro = new perro({ name: newName, age: newAge, breed: newBreed });
        document.getElementById("text").innerHTML = `${newperro.hacerSonido() + newperro.moverCola()}`;
    }
})