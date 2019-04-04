//Aqui eu escrevo na console do navegador

var olaMundo = "Olá Mundo!";

console.log(olaMundo);

/**
 * atribuições diferentes com let
 * verficar se a constante é igual a variavel b nesse caso dará falso pq a tipagem do dado é ignorada
 * se você quer verificar se o valor e tipagem são iguais, usa-se ===
 * 
 * == compara valores
 * === compara valores e tipos de dados
 * !==  compara se os valores e tipos de dados são diferentes (!=) para só valores
 */
 let a = 10;
 //const b = "20";
 const b = "10";
console.log(a === b && typeof b == 'string'); 


//------------
let cor = "verde";

if(cor === "verde"){
    console.log("siga!");
}else if(cor == "amarelo"){
    console.log("Atenção");
}else{
    console.log("pare!");
}
