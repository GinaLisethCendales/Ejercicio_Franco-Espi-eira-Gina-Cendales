const usuario = {
    nombre:'',
    apellido:''
}
const lista_usuarios = []


const clave = 0

function agregarUsuario(_nombres, _apellidos){

    const NuevoUsuario = {
        nombre:_nombres,
        apellido:_apellidos
    }

    if(lista_usuarios.length<15){
        lista_usuarios.push(NuevoUsuario)
    }
    else{
        var boton = document.getElementById('btncargar')
        boton.disabled = true
        alert('Ha alcanzado el limite de usuarios')
    }
}


//Punto 9//
function generarCodigoEliminar(){
    clave = Math.round(Math.random() * 10000000)
}

function ConfirmarEliminar(codigo){

    if(codigo == clave){

    }
    else{
        
    }

}
