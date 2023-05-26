class Figura {
    color;
    area;
    constructor({ color, area}) {
        this.color = color;
        this.area = area;
    }
    calcularArea() {
        return `Tengo ${this.area} m^2 de area`
    }
}

class Circulo extends Figura {
    radio;
    constructor({ color, radio }) {
        super({ color})
        this.radio = radio;
    }
    calcularArea() {
        return `Tengo  ${((this.radio**2)*Math.PI).toFixed(2)} m^2 de area.`;
    }
}

class Rectangulo extends Figura {
    largo;
    ancho
    constructor({ color, largo, ancho }) {
        super({color})
        this.largo = largo;
        this.ancho = ancho;
    }
    calcularArea() {
        return `Tengo  ${(this.largo*this.ancho).toFixed(2)} m^2 de area.`;
    }
}

document.addEventListener("change", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const Tipo = document.getElementById("tipo");
    const Radio = document.getElementById("radio");
    const Area = document.getElementById("area");
    const Largo = document.getElementById("largo");
    const Ancho = document.getElementById("ancho");
    const BtnCirculo = document.getElementById("circulo");
    const BtnFigura = document.getElementById("figura");
    const BtnRectangulo = document.getElementById("rectangulo");

    if (e.target.id == "tipo") {
        if (Tipo.value == "figura") {
            Radio.style.display = "none";
            Largo.style.display = "none";
            Ancho.style.display = "none";
            Area.style.display = "block";
            BtnCirculo.style.display = "none";
            BtnRectangulo.style.display = "none";
            BtnFigura.style.display = "block";
            
        } else if (Tipo.value == "circulo") {
            Radio.style.display = "block";
            Area.style.display = "none";
            Largo.style.display = "none";
            Ancho.style.display = "none";
            BtnCirculo.style.display = "block";
            BtnFigura.style.display = "none";
            BtnRectangulo.style.display = "none";
            
        } else if (Tipo.value == "rectangulo") {
            Radio.style.display = "none";
            Area.style.display = "none";
            Largo.style.display = "block";
            Ancho.style.display = "block";
            BtnCirculo.style.display = "none";
            BtnFigura.style.display = "none";
            BtnRectangulo.style.display = "block";

        }
            else {
            Radio.style.display = "none";
            Area.style.display = "block";
            Largo.style.display = "none";
            Ancho.style.display = "none";
            BtnCirculo.style.display = "none";
            BtnRectangulo.style.display = "none";
            
        }
    }
});

document.addEventListener("click", e => {
    let newColor = document.getElementById("color").value;
    let newArea = document.getElementById("area").value;
    let newRadio = document.getElementById("radio").value;
    let newLargo = document.getElementById("largo").value;
    let newAncho = document.getElementById("ancho").value;
    if (e.target.id == "figura") {
        const newFigura = new Figura({ color: newColor, area: newArea});
        document.getElementById("text").innerHTML = `${newFigura.calcularArea()}`;
    } else if (e.target.id == "circulo") {
        const newCirculo = new Circulo({ color: newColor, radio: newRadio});
        document.getElementById("text").innerHTML = `${newCirculo.calcularArea()}`;
    }else if (e.target.id == "rectangulo") {
        const newRectangulo = new Rectangulo({ color: newColor, largo: newLargo, ancho: newAncho});
        document.getElementById("text").innerHTML = `${newRectangulo.calcularArea()}`;
    }
})