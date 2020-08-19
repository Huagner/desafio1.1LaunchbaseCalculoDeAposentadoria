// declaracao de variaveis
let name = "Ana"
let gender = "F"
let age = 34
let contribution = 21

let some = age+contribution

// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
if (gender === "F"){
    if (some >= 85){
        console.log(`${name}, you are retired.`)
    } else {
        console.log(`${name}, you are not retired.`)
    }
} 
if (gender === "M"){
    if (some >= 95){
        console.log(`${name}, you are retired.`)
    } else {
        console.log(`${name}, you are not retired.`)
    }
}