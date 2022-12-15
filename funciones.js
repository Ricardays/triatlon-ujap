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
    else if (ced.value.trim() == "" || ced.value.length < 8){
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
    else {
        let dateform = new FormData(data);

        let tablaRef = document.getElementById("Tabla");
        let filatablaRef = tablaRef.insertRow(-1);

        let añadirCellRef = filatablaRef.insertCell(0);
        añadirCellRef.textContent = dateform.get("nombre")
            
        añadirCellRef = filatablaRef.insertCell(1);
        añadirCellRef.textContent = dateform.get("cedula")

        añadirCellRef = filatablaRef.insertCell(2);
        añadirCellRef.textContent = dateform.get("municipio")

        añadirCellRef = filatablaRef.insertCell(3);
        añadirCellRef.textContent = dateform.get("edad")

        data.reset()
    }
})


// Metodos Simulación Carrera
// funcionamiento del campeonato

function comienza(){
    // declaramos las variables
    caminata = 10000, natacion = 10000, ciclismo = 30000;
    persona = (7 * 1000) / 3600, nadador = 1.72, ciclista = (45 * 1000) / 3600;
    
    candidatos = 0 // Se tiene que agregar la cantidad de candidatos que van a concursar
let registros = [
    new Registro("Par 1", 123456789, "Muni 1", 18),
    new Registro("Par 2", 987654321, "Muni 2", 19),
    new Registro("Par 3", 159753268, "Muni 3", 20),
    new Registro("Par 4", 684215973, "Muni 4", 21)
]

    distanPersonas = []
    disNadador = []
    disCiclista = []

    comenzar()
}
function comenzar(){ //Caminata
    valorMaximoRecorrido = 0;
    for (let i = 0; i <= candidatos; i++){
        disCam = Math.random () * caminata;
        if(disCam > 1){
            distanPersonas.append(disCam);
        }
        else{
            distanPersonas.append("Descalificado");
        }
    }
    valorMaximoRecorrido = Math.max(...distanPersonas);
    return valorMaximoRecorrido
}

function segundo(valorMaximoRecorrido){ // Natacion
    valorMaximoNadado = 0;
    for (let i = 0; i<= candidatos; i++){
        disNat = Math.random () * natacion;
        if(disCam > 1){
            disNadador.append(disCam);
        }
        else{
            disNadador.append("Descalificado");
        }
    }
    valorMaximoNadado = Math.max(...disNadador)
    return valorMaximoNadado
}

function tercero(valorMaximoNadado){ // Ciclismo
    valorMaximoPedaleando = 0;
    for (let i = 0; i<= candidatos; i++){
        disCicl = Math.random () * ciclismo;
        if(disCam > 1){
            disNadador.append(disCam);
        }
        else{
            disNadador.append("Descalificado");
        }
    }
    valorMaximoPedaleando = Math.max(...disNadador)
    return valorMaximoPedaleando
}

