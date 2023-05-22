function validarRut() {
    var rutInput = document.getElementById("txtRut").value;
    var rutPattern = /^[0-9]+-[0-9kK]{1}$/;

    if (rutInput.trim() === "") {
        document.getElementById("error_rut").innerHTML = "Debes ingresar tu rut";
        return false;
    }

    if (!rutPattern.test(rutInput)) {
        document.getElementById("error_rut").innerHTML = "El rut ingresado no es válido";
        return false;
    }

    if (rutInput.trim() === "") {
        document.getElementById("error_rut").innerHTML = "";
        return false;
    }

    document.getElementById("error_rut").innerHTML = "";
    return true;
}

function validarNombre() {
    var nombreInput = document.getElementById("nombre").value;

    if (nombreInput.trim() === "") {
        document.getElementById("error_nombre_min").innerHTML = "Debes ingresar tu nombre";
        document.getElementById("error_nombre_max").innerHTML = "";
        return false;
    }

    if (nombreInput.length > 50) {
        document.getElementById("error_nombre_min").innerHTML = "";
        document.getElementById("error_nombre_max").innerHTML = "El nombre excede el largo máximo permitido";
        return false;
    }

    document.getElementById("error_nombre_min").innerHTML = "";
    document.getElementById("error_nombre_max").innerHTML = "";
    return true;
}

function validarApellido() {
    var apellidoInput = document.getElementById("apellido").value;

    if (apellidoInput.trim() === "") {
        document.getElementById("error_apellido_min").innerHTML = "Debes ingresar tu apellido";
        document.getElementById("error_apellido_max").innerHTML = "";
        return false;
    }

    if (apellidoInput.length > 50) {
        document.getElementById("error_apellido_min").innerHTML = "";
        document.getElementById("error_apellido_max").innerHTML = "El apellido excede el largo máximo permitido";
        return false;
    }

    document.getElementById("error_apellido_min").innerHTML = "";
    document.getElementById("error_apellido_max").innerHTML = "";
    return true;
}

function validarCorreo() {
    var correoInput = document.getElementById("email").value;
    var correoPattern = /^\S+@\S+\.\S+$/;

    if (correoInput.trim() === "") {
        document.getElementById("error_email").innerHTML = "Debes ingresar un correo electrónico";
        return false;
    }

    if (!correoPattern.test(correoInput)) {
        document.getElementById("error_email").innerHTML = "El formato ingresado es incorrecto";
        return false;
    }

    document.getElementById("error_email").innerHTML = "";
    return true;
}

function validarContraseñas() {
    var passwordInput = document.getElementById("password").value;
    var confirmPasswordInput = document.getElementById("confirm-password").value;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,10}$/;

    if (passwordInput.trim() === "") {
        document.getElementById("error_password").innerHTML = "Debes ingresar una contraseña";
        return false;
    }

    if (!passwordPattern.test(passwordInput)) {
        document.getElementById("error_password").innerHTML =
            "<ul>" +
            "<li>Entre 6 y 10 caracteres</li>" +
            "<li>Debe tener al menos una mayúscula, una minúscula y un número</li>" +
            "<li>No puede contener caracteres especiales</li>" +
            "</ul>";
        return false;
    }

    if (passwordInput !== confirmPasswordInput) {
        document.getElementById("error_password").innerHTML = "";
        document.getElementById("error_confirm_password").innerHTML = "Las contraseñas no coinciden";
        return false;
    }

    document.getElementById("error_password").innerHTML = "";
    document.getElementById("error_confirm_password").innerHTML = "";
    return true;
}

function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    var showIcon = document.getElementById("mostrar_" + inputId);
    var hideIcon = document.getElementById("ocultar_" + inputId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showIcon.style.display = "none";
        hideIcon.style.display = "inline-block";
    } else {
        passwordInput.type = "password";
        showIcon.style.display = "inline-block";
        hideIcon.style.display = "none";
    }
}

function togglePasswordIcon(iconId) {
    var icon = document.getElementById(iconId);

    if (icon.classList.contains("fa-eye")) {
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function validarCiudad() {
    var carreraSelect = document.getElementById("carrera");
    var errorCarrera = document.getElementById("error_carrera");

    if (carreraSelect.value === "null") {
        errorCarrera.style.display = "block";
        return false;
    } else {
        errorCarrera.style.display = "none";
        return true;
    }
}

function validarGenero() {
    var femeninoRadio = document.getElementById("femenino");
    var masculinoRadio = document.getElementById("masculino");
    var otroRadio = document.getElementById("otro");
    var errorGenero = document.getElementById("error_genero");

    if (!femeninoRadio.checked && !masculinoRadio.checked && !otroRadio.checked) {
        errorGenero.style.display = "block";
        return false;
    } else {
        errorGenero.style.display = "none";
        return true;
    }
}

function validarFechaNacimiento() {
    var fechaNacimiento = document.getElementById("fecha_nac");
    var errorNacimiento = document.getElementById("error_nacimiento");

    if (fechaNacimiento.value === "") {
        errorNacimiento.style.display = "block";
        return false;
    } else {
        errorNacimiento.style.display = "none";
        return true;
    }
}

function validarComentarios() {
    var comentarios = document.getElementById("comments");
    var commentInfo = document.getElementById("comment-info");

    if (comentarios.value.length > 200) {
        commentInfo.textContent = "El comentario excede el máximo de 200 caracteres";
        commentInfo.style.color = "red";
    } else {
        commentInfo.textContent = "";
    }
}


function validarCampos() {
    var rut = document.getElementById("txtRut").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm-password").value;
    var carrera = document.getElementById("carrera").value;
    var genero = document.querySelector('input[name="genero"]:checked');
    var fecha_nac = document.getElementById("fecha_nac").value;

    if (rut === "") {
        document.getElementById("error_rut").style.display = "block";
        return false;
    } else {
        document.getElementById("error_rut").style.display = "none";
    }

    if (nombre === "") {
        document.getElementById("error_nombre_min").style.display = "block";
        return false;
    } else {
        document.getElementById("error_nombre_min").style.display = "none";
    }

    if (apellido === "") {
        document.getElementById("error_apellido_min").style.display = "block";
        return false;
    } else {
        document.getElementById("error_apellido_min").style.display = "none";
    }

    if (email === "") {
        document.getElementById("error_email").style.display = "block";
        return false;
    } else {
        document.getElementById("error_email").style.display = "none";
    }

    if (password === "") {
        document.getElementById("error_password").style.display = "block";
        return false;
    } else {
        document.getElementById("error_password").style.display = "none";
    }

    if (confirm_password === "") {
        document.getElementById("error_confirm_password").style.display = "block";
        return false;
    } else {
        document.getElementById("error_confirm_password").style.display = "none";
    }

    if (carrera === "null") {
        document.getElementById("error_carrera").style.display = "block";
        return false;
    } else {
        document.getElementById("error_carrera").style.display = "none";
    }

    if (!genero) {
        document.getElementById("error_genero").style.display = "block";
        return false;
    } else {
        document.getElementById("error_genero").style.display = "none";
    }

    if (fecha_nac === "") {
        document.getElementById("error_nacimiento").style.display = "block";
        return false;
    } else {
        document.getElementById("error_nacimiento").style.display = "none";
    }

    // Realizar otras validaciones necesarias

    alert("Registro enviado correctamente");
    return true;
}

