class Persona {
    name;
    age;
    gender;
    constructor({ name, age, gender }) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    saludar() {
        return `Hola soy ${this.gender} me llamo ${this.name} y tengo ${this.age} años`
    }

    static esMayorDeEdad(p1) {
        if (p1 > 17) {
            return true
        } else {
            return false
        }
    }
}

// let persona1 = new Persona ({name:"Ivan", age:23, gender:"Hombre"});
// console.log(persona1.saludar());

class Estudiante extends Persona {
    career;
    constructor({ name, age, gender, career }) {
        super({ name, age, gender })
        this.career = career;
    }

    estudiar() {
        return `, estudio ${this.career}.`;
    }
}
// let estudiante1 = new Estudiante({name:"Jesus", age:17, gender:"hombre", career:"ing.mecanica"});
// console.log(estudiante1.saludar(), estudiante1.estudiar());
// console.log(Persona.esMayorDeEdad(persona1.age));
// console.log(Persona.esMayorDeEdad(estudiante1.age));

document.addEventListener("change", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const Tipo = document.getElementById("tipo");
    const Carrera = document.getElementById("career");
    const BtnEstudiante = document.getElementById("estudiante");

    if (e.target.id == "tipo") {
        if (Tipo.value == "person") {
            Carrera.style.display = "none";
            BtnEstudiante.style.display = "none";
        } else if (Tipo.value == "student") {
            Carrera.style.display = "block";
            BtnEstudiante.style.display = "block";
        } else {
            Carrera.style.display = "none";
            BtnEstudiante.style.display = "none";
        }
    }
});

document.addEventListener("click", e => {
    let newName = document.getElementById("name").value;
    let newAge = document.getElementById("age").value;
    let newGender = document.getElementById("gender").value;
    let newCareer = document.getElementById("career").value;
    if (e.target.id == "saludar") {
        const newPersona = new Persona({ name: newName, age: newAge, gender: newGender });
        document.getElementById("text").innerHTML = `${newPersona.saludar()} <br>`;
        console.log(Persona.esMayorDeEdad(newPersona.age))
    } else if (e.target.id == "estudiante") {
        const newEstudiante = new Estudiante({ name: newName, age: newAge, gender: newGender, career: newCareer });
        document.getElementById("text").innerHTML = `${newEstudiante.saludar() + newEstudiante.estudiar()} <br>`;
    }
})