let inputNome = document.getElementById("nome");

inputNome.addEventListener('blur', verificaSeCampoDigitado);

function verificaSeCampoDigitado() {
    if(inputNome.value==' '){
        alert("Preencha o campo")
    }
}