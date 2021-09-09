const registro = document.querySelector('.formulario');
registro.innerHTML = `<form class="form">
<div class="contenedor">
        <h2 style="text-align: center;">Formulario de registro</h2>
    <div class="columnas">
        <div class="columna">
            <label for="nombre">Nombre:</label>
            <input class="nombre" type="text" name="nombre">
        </div>  
        <div class="columna">
            <label for="apellido">Apellido:</label>
            <input class="apellido" type="text" name="apellido">
        </div>
        <div class="columna">
            <label for="telefono">Telefono:</label>
            <input class="telefono" style="margin-right: 1px;" type="tel" name="telefono">
        </div>
        <div class="columna">
            <label for="direccion">Direccion:</label>
            <input class="direccion" style="margin-right: 5px;" type="text" name="direccion">
        </div>
        <div style="display: flex; flex-wrap: wrap;" class="columna">
            <label for="observaciones">Observaciones:</label>
            <textarea class="observacion" name="observaciones"cols="30" rows="10"></textarea>
        </div>
    </div>
        <div class="boton__submit"><input type="submit" value="Enviar"></div>
</div>
</form>`; 

const casillaNombre = document.querySelector('.nombre');
const casillaApellido = document.querySelector('.apellido');
const casillaTelefono = document.querySelector('.telefono');
const casillaDireccion = document.querySelector('.direccion');
const casillaObservacion = document.querySelector('.observacion');
const submit = document.querySelector('.form');


// Añadiendo la opción de que la información del localStorage se guarde al enviar el documento.
submit.addEventListener('submit', e =>{ 
    let signUp = {
        nombre : casillaNombre.value,
        apellido : casillaApellido.value,
        telefono : casillaTelefono.value,
        direccion : casillaDireccion.value,
        observacion : casillaObservacion.value
    }
    if (!isNaN(signUp.telefono)) {
        localStorage.setItem('signUp', JSON.stringify(signUp));
    } else {
        alert("Diligencia tu número correctamente.");
        localStorage.removeItem('signUp');
    }
    e.preventDefault();
})


