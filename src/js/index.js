const inputs = document.querySelectorAll(".info");
const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', function (event) {
    event.preventDefault();
    validarCampos();
});

function validarCampos() {
    inputs.forEach((input) => {
        const campoNull = input.value === "";
        const formNull = input.nextElementSibling;

        if (campoNull) {
            input.classList.add("invalido");
            formNull.innerHTML = "Campo obrigatório";
        } else {
            input.classList.remove("invalido");
            formNull.innerHTML = "";
        }
    });

    inputs.forEach((input) => {
        const campoValido = input.value !== "";
        const formNull = input.nextElementSibling;
        formNull.classList.add('formNull');

        if (campoValido) {
            input.classList.add("valido");
        } else {
            input.classList.remove("valido");
        }
    });
}