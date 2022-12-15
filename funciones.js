// Estructuras de Datos

class Registro {
    nombre = "";
    ced = 0;
    muni = "";
    edad = 0;
    calificado = true;

    constructor(nombre, ced, muni, edad) {
        this.nombre = nombre;
        this.ced = ced;
        this.muni = muni;
        this.edad = edad;
    }
}


// Funciones para continuar a la sig pag
function registro(){
    location.href = "registro.html";
}

function iniciarEvento(){
    location.href = "resultados.html"
}

// Funcion para que ningun parametro quede vacio

const nom = document.getElementById("nombre");
const ced = document.getElementById("cedula");
const muni = document.getElementById("municipio");
const edad = document.getElementById("edad");
const data = document.getElementById("form")
const listaInput = document.querySelectorAll(".imputNom")

data.addEventListener("submit", function(eve){
    eve.preventDefault();

    if(nom.value.trim() == "" || nom.value.length < 1){
        alert("Si no ingresas un nombre. No puedes participar.");
        document.getElementById("nombre").focus();
    } 
    else if (ced.value.trim() == "" || ced.value.length < 9){
        alert("Si no ingresas una Cedula. No puedes participar.");
        document.getElementById("cedula").focus();
    } 
    else if (muni.value.trim() == "" || muni.value.length < 1){
        alert("Si no ingresas un Municipio de donde vives. No puedes participar.");
        document.getElementById("municipio").focus();
    } 
    else if (edad.value.trim() == "" || edad.value.length < 1){
        alert("Si no ingresas una Edad. No te podemos ubicar con los de tu nivel durante la participación.");
        document.getElementById("edad").focus();
    } 
})

function formulario(){
    data.reset();
}

// Metodos Simulación Carrera

let registros = [
    new Registro("Par 1", 123456789, "Muni 1", 18),
    new Registro("Par 2", 987654321, "Muni 2", 19),
    new Registro("Par 3", 159753268, "Muni 3", 20),
    new Registro("Par 4", 684215973, "Muni 4", 21)
]


/*function capturar(){
    var nom = document.getElementById("nombre").value;
    var ced = document.getElementById("cedula").value;
    var muni = document.getElementById("municipio").value;
    var edad = document.getElementById("edad").value;
    const data = document.getElementById("form");

    if(nom == ""){
        alert("Si no ingresas un nombre. No puedes participar.");
        document.getElementById("nombre").focus();
    } else if (ced == ""){
        alert("Si no ingresas una Cedula. No puedes participar.");
        document.getElementById("cedula").focus();
    } else if (muni == ""){
        alert("Si no ingresas un Municipio de donde vives. No puedes participar.");
        document.getElementById("municipio").focus();
    } else if (edad == ""){
        alert("Si no ingresas una Edad. No te podemos ubicar con los de tu nivel durante la participación.");
        document.getElementById("edad").focus();
    } else {
        data.addEventListener("submit", function(event){
            event.preventDefault();
            let dateform = new FormData(data);

            let tablaRef = document.getElementById("Tabla")
            let filatablaRef = tablaRef.insertRow(-1)

            let añadirCellRef = filatablaRef.insertCell(0)
            añadirCellRef.textContent = dateform.get("nombre")
            
            añadirCellRef = filatablaRef.insertCell(1)
            añadirCellRef.textContent = dateform.get("cedula")

            añadirCellRef = filatablaRef.insertCell(2)
            añadirCellRef.textContent = dateform.get("municipio")

            añadirCellRef = filatablaRef.insertCell(3)
            añadirCellRef.textContent = dateform.get("edad")
        })
        location.href = ""; // aqui para colocar lo de la tabla de validaciones
    }
}*/
