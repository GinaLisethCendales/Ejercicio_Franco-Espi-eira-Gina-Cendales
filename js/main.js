const usuario = {
    nombre:'',
    apellido:''
}
const lista_usuarios = []


const clave = 0

function agregarUsuario(_nombres, _apellidos){

    
    
    const NuevoUsuario = {
        nombre:primeraLetraMayuscula(_nombres),
        apellido:primeraLetraMayuscula(_apellidos)
    }

    if(lista_usuarios.length<15){
        lista_usuarios.push(NuevoUsuario)
        localStorage.setItem("tablausuarios", JSON.stringify(lista_usuarios))
        AgregarFila(NuevoUsuario.nombre, NuevoUsuario.apellido) 
    }
    else{
        var boton = document.getElementById('btncargar')
        boton.disabled = true
        alert('Ha alcanzado el limite de usuarios')
    }

    
}


//Punto 9//
function generarCodigoEliminar(){
    return Math.round(Math.random() * 10000000)
}

function ConfirmarEliminar(codigo){

    if(codigo == clave){

    }
    else{
        
    }

}

function AgregarFila(_nombres, _apellidos) {
    var hst = document.getElementById("listaUsuarios");
    hst.innerHTML += "<tr><td>" + _nombres + "</td><td>" + _apellidos + "</td><td> <button onclick=\"eliminar(this)\"> Eliminar </button></td></tr>";
    
  }

function cargarDatos(){
    var usuarios = JSON.parse(localStorage.getItem("tablausuarios"));
    var hst = document.getElementById("listaUsuarios");
    for (var i = 0; i < usuarios.length; i++) {
        hst.innerHTML += "<tr><td>" + usuarios[i].nombre + "</td><td>" + usuarios[i].apellido + "</td><td> <button onclick=\"eliminar(this)\">  Eliminar </button></td></tr>";
    }

}

function eliminar(o) {
    //no clue what to put here?
    var p=o.parentNode.parentNode;
        p.parentNode.removeChild(p);

    var usuarios = JSON.parse(localStorage.getItem("tablausuarios"));

   }

function EliminarTodos(){

    var codigo = prompt("Confirme eliminacion, digite el siguiente codigo: "+ generarCodigoEliminar())
    localStorage.setItem("tablausuarios", "")
    var hst = document.getElementById("listaUsuarios");
    hst.innerHTML = "";



}

function primeraLetraMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }