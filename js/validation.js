/*
Código em portugues, arquivos em inglês. Código será usado como referência futura.
*/

const inputDate = document.querySelector('[data-dataNascimento]')

//Evento 'blur' é quando o input perde o foco
inputDate.addEventListener('blur', evento => validaDataNascimento(evento.target))
//evento.target retorna o input type="date


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
