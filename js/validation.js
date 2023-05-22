/*
Código em portugues, arquivos em inglês. Código será usado como referência futura.
*/


export function valida(input){
    const tipoInput = input.dataset.tipo
    //Pega o valor do data-attribute do "tipoInput" no input passado
    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input)
}


function validaDataNascimento(input){
   
    let mensagem = ''


    //.value retorna o valor armazenado do input, nesse caso uma data no formato AAAA-MM-DD
    if(!isMaiorIdade(new Date(input.value))){
        mensagem = 'Você deve ter mais de 18 anos para se cadastrar'
    }

    input.setCustomValidity(mensagem);//Altera a mensagem de alerta    
}

function isMaiorIdade(data){

    //A idade tem a estrutura de AAAA-MM-DD
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}
