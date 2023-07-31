async function buscaEndereco(cep) {
   var mensagemErro = document.getElementById('erro')
   mensagemErro.innerHTML = ""
   try {
      var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      var consultaCepConvertida = await consultaCep.json();
      if (consultaCepConvertida.erro) {
         throw Error('Este CEP não existe');
      }
      var bairro = document.getElementById('bairro')
      var cidade = document.getElementById('cidade')
      var endereco = document.getElementById('endereco')
      var estado = document.getElementById('estado')

      bairro.value = consultaCepConvertida.bairro
      cidade.value = consultaCepConvertida.localidade
      endereco.value = consultaCepConvertida.logradouro
      estado.value = consultaCepConvertida.uf

      console.log(consultaCepConvertida);
      return consultaCepConvertida;
   } catch (erro) {
      mensagemErro.innerHTML=`<p>CEP invalido. Tente novamente!`
      console.log(erro)
   }
}
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));



/*  ---resultado das arrys---
let ceps = ['01001000','01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
console.log(conjuntoCeps)
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))*/

/*.then(resposta => resposta.json())
.then(r => {
 if(r.erro){
    throw Error ('esse cep não existe')
 }else
    console.log(r)
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento concluido!'));*/