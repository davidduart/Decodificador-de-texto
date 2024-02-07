function criptografar() {
    let novoTexto = input.value.replace(/a|e|i|o|u/g,function(ocorrencia){
            return codifica[ocorrencia];
        });
    output.value = novoTexto;
}

function descriptografar() {
    let novoTexto = input.value.replace(/ai|enter|imes|ober|ufat/g,function(ocorrencia){
            return decodifica[ocorrencia];
        });
    output.value = novoTexto;
}

function copiar() {
    navigator.clipboard.writeText(output.value);
    input.select();
}

function limpar() {
    input.value = "";
    output.value = "";
}

let input = document.getElementById("input");
let output = document.getElementById("output");
let botaoCriptografar = document.getElementById("criptografar");
let botaoDeDescriptografar = document.getElementById("descriptografar");
let botaoCopiar = document.getElementById("copiar");
let codifica = {a:"ai", e:"enter", i:"imes", o:"ober", u:"ufat"};
let decodifica = {ai:"a", enter:"e", imes:"i", ober:"o", ufat:"u"};
let aviso = document.getElementById("aviso");
let botaoLimpar = document.getElementById("limpar");
botaoCriptografar.onclick = criptografar;
botaoDeDescriptografar.onclick = descriptografar;
botaoCopiar.onclick = copiar;
botaoLimpar.onclick = limpar;

input.addEventListener('beforeinput', function(event) {
    if(/[^a-z\s.,?!;]/.test(event.data)) {
        event.preventDefault();
        aviso.style.color = "pink";
        aviso.style.fontWeight = "normal";
        aviso.scrollIntoView(false);
        aviso.classList.add('aviso-pulsante');
    } else {
        aviso.style.color = "rgb(87, 87, 87)";
        aviso.style.fontWeight = "normal";
        aviso.classList.remove('aviso-pulsante');
    }
});

document.addEventListener("keydown", function(e) {
    if(e.key == "Enter") {
        e.preventDefault();
        alert("Por gentileza, selecione se quer criptografar ou descriptografar o texto.");
    }
});