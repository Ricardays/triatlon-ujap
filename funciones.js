// Estructuras de Datos

class Registro {
    nombre = "";
    ced = 0;
    muni = "";
    edad = 0;

    constructor(nombre, ced, muni, edad) {
        this.nombre = nombre;
        this.ced = ced;
        this.muni = muni;
        this.edad = edad;
    }
}

class Participante {
    nombre = "";
    ced = 0;
    muni = "";
    edad = 0;
    calificado = true;
    horaInicio;
    horaFin;


    constructor(nombre, ced, muni, edad) {
        this.nombre = nombre;
        this.ced = ced;
        this.muni = muni;
        this.edad = edad;
    }
}


// Funciones para continuar a la sig pag
function redirectRegistro(){
    location.href = "registro.html";
}

function redirectResultados(){
    location.href = "resultados.html"
}

function redirectPrincipal(){
    location.href = "index.html"
}

function redirectAsistencia(){
    location.href = "asistencia.html"
}

// Variables Globales

let registros = [];
let participantes = [];
let aux;

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
        let rowRef = tablaRef.insertRow(-1);

        const name = dateform.get("nombre");
        const ced = dateform.get("cedula");
        const mun = dateform.get("municipio");
        const age = dateform.get("edad");


        let cellRef = rowRef.insertCell(0);
        cellRef.textContent = name;

        cellRef = rowRef.insertCell(1);
        cellRef.textContent = ced;

        cellRef = rowRef.insertCell(2);
        cellRef.textContent = mun;

        cellRef = rowRef.insertCell(3);
        cellRef.textContent = age;

        registros.push(new Registro(name, ced, mun, age))
        window.localStorage.setItem("registros", JSON.stringify(registros))
        data.reset()
    }
})

// Asistencia

function checkBoxChange(checkbox){
    aux = checkbox;
    if(checkbox.checked){
        // Se activo el check, se guardara en participantes
        const reg = registros.find(reg => reg.ced.toString() === checkbox.value);

        participantes.push(new Participante(reg.nombre, reg.ced, reg.muni, reg.edad));
    } else {
        // Se desactivó el check, se elimina de participantes
        const part = participantes.find(p => p.ced.toString() === checkbox.value);
        participantes.splice(participantes.indexOf(part), 1);
    }
    // Se actualiza el item de participantes
    localStorage.setItem("participantes", JSON.stringify(participantes));

}

function loadAsistenciaTable(){
    // Se cargan los registros y se limpian los participantes
    registros = JSON.parse(localStorage.getItem("registros"));
    participantes = [];
    localStorage.setItem("participantes", JSON.stringify(participantes));

    let tablaRef = document.getElementById("tabla-asistencia");

    // Se llena la tabla con los registros
    registros.forEach(registro => {
        let rowRef = tablaRef.insertRow(-1);

        let cellRef = rowRef.insertCell(0);
        cellRef.innerHTML = "<label>\n" +
            "                            <input type=\"checkbox\" onchange=\"checkBoxChange(this)\" value=\"" +registro.ced + "\">\n" +
            "                        </label>"
        cellRef = rowRef.insertCell(1);
        cellRef.textContent = registro.nombre;

        cellRef = rowRef.insertCell(2);
        cellRef.textContent = registro.ced;

        cellRef = rowRef.insertCell(3);
        cellRef.textContent = registro.muni;

        cellRef = rowRef.insertCell(4);
        cellRef.textContent = registro.edad;
    })
}


// funcionamiento del campeonato

function comienza(){
    // declaramos las variables
    caminata = 10000, natacion = 10000, ciclismo = 30000;
    persona = (7 * 1000) / 3600, nadador = 1.72, ciclista = (45 * 1000) / 3600;
    
    candidatos = 0 // Se tiene que agregar la cantidad de candidatos que van a concursar
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

function readResultados(){
    registros = JSON.parse(localStorage.getItem("registros"));
}

