let inputCriptografar = document.querySelector('#Input');
let imagem = document.querySelector("#triste");
let valor;
let isDeletado = false;

function Criptografar(){
    valor = inputCriptografar.value;
    
    if(valor == ""){
        alert("Não há nada escrito. Por favor, escreva alguma coisa.");
    }else{
        valor = valor
        .replaceAll("e", "enter")   
        .replaceAll("i", "imes")                
        .replaceAll("a", "ai") 
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat"); 
        removerElemento(valor);
    }
}
function Descriptografar(){
    valor = inputCriptografar.value;

    if(valor == ""){
        alert("Não há nada escrito. Por favor, escreva alguma coisa.");
    }else{
        valor = valor.replaceAll("ai", "a") 
        .replaceAll("enter", "e")  
        .replaceAll("imes", "i") 
        .replaceAll( "ober", "o")
        .replaceAll("ufat", "u");
        removerElemento(valor);
    }
}
function removerElemento(valor){
    console.log(valor);
 
        
    if(!isDeletado){
        isDeletado = true;
        document.querySelector('.Resultado__Texto').remove();
        imagem.remove();
    }

    let divResultado = document.querySelector('.Resultado__pedido');
    divResultado.innerHTML = `<strong>${valor}</strong>`;
}