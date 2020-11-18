/*var nome='Adriana Bonfanti';
var idade=44;
var idade2=10
var frase="Japão é o melhor time do mundo!"
console.log(nome);
console.log(idade);
console.log(frase.toUpperCase());
console.log(idade*idade2);
var lista=['maçã','pera','laranja'];
lista.pop();
lista.push("uva");
console.log(lista.toString()[0]);
console.log(lista.join(" | "));
var fruta={nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
var fruta=[{nome:"maçã", cor:"vermelha"}, {nome:"laranja", cor:"laranja"},{nome:"uva", cor:"roxa"}];
console.log(fruta[1].nome);
var idade=prompt("Qual sua idade?");
if(idade>=18){
alert('maior de idade');
}
else{
    alert('menor de idade');
}
var count=5;
while(count<=5){
    console.log(count);
count++;
}
var count;
for(count=0; count<=5;count++){
    alert(count);
}
var d=new Date();
alert(d.getMonth());
*/
function botao(){
 document.getElementById("agradecimento").innerHTML="<b> Obrigada por clicar </b>";
}
function redirecionar(){
    window.open('http://www.uol.com.br');
    window.location.href="http://www.mercadolivre.com.br";
}
function trocar(elemento){
    elemento.innerHTML="vc passou o mouse aqui!"
}
function voltar(elemento){
    elemento.innerHTML="vc não passou o mouse aqui!"
}
function muda(elemento){
    alert(elemento.value)
}