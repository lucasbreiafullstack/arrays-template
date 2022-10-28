//TREINANDO ARRAYS

const arrayString = ["Macã", "Uva", "Banana"]
const arrayNumber = [2, 4, 5]
const arraySortido = [2, "Laranja", true]
const arrayNum = [10]
const arrayVazio = []

console.log(arrayString.length[3])
/*Ao tentar acessar o índice 3, o código retorna "undefined".
pois o Array têm índices de 0 à 2.*/

console.log(arraySortido.includes(2))
console.log(arraySortido.includes("Laranja"))
console.log(arraySortido.includes(true))
//Verificando se os elementos foram inclusos.

console.log(arrayNum)
console.log(arrayNum[0])
console.log(arrayNum.length)
//Verificando o quarto Array.

const arrayStringCopia = arrayString.slice()
//Copiando o Array.

arrayStringCopia.push("Tomate")
//inludindo elemento.

console.log(arrayString)
console.log(arrayStringCopia)
//Mostrando a diferença Original/Cópia.

arrayStringCopia.splice(2, 2)
console.log(arrayStringCopia)
//exclusão dos índices 2 e 3.

//EXERCÍCIO DE FIXAÇÃO

const arrayNumberOriginal = [2, 4, 7, 1, 3, 5, 8, 6]
arrayNumberCopia = arrayNumberOriginal.slice() //Cópia do Array Original
console.log(arrayNumberCopia)

arrayNumberCopia.pop() //Exclusão do último número do Array Cópia
console.log(arrayNumberCopia)

arrayNumberCopia.splice(2,1) //Exclusão do elemento que estava no índice 2.
console.log(arrayNumberCopia)

console.log(arrayNumberOriginal)
console.log(arrayNumberCopia)
//imprimindo a diferença entre o Original e a Cópia.



