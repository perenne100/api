//MOCK
import products from "./mock.json" assert { type: "json" };

//Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti;
console.log("LISTA PRODOTTI: \n", products.productsList)
//Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista dei prodotti, cioé le cuffie...
console.log("TERZO PRODOTTO: \n", products.productsList[2])
//Esercizio 3 dato il mock di partenza, stampa in consolela lista dei prodotti che costano meno di 200 euro
const minori200 = products.productsList.filter(prod=>prod.price<=200)
console.log("MINORI €200: \n", minori200)
//Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8, (ATTENZIONE:come oggetto non come array)
console.log("PRODOTTO ID 8")

const oggetto8 = products.productsList.filter(prod=>prod.id===8)
console.log(oggetto8[0])

products.productsList.forEach(
    function (prod){
        if(prod.id===8){
            console.log(prod)
        }
    }
)
//Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock
console.log("LISTA NOMI:")
products.productsList.forEach(prod=>console.log(prod.name))

console.log("FINE ESERCIZI")

//API
const url = "https://jsonplaceholder.typicode.com/todos"

//GET
fetch(url,{method:"GET", headers:{accept:"application/json"}})
.then(response=>{
    if(!response.ok){
        throw new Error(response.status)
    }
    return response.json()
})
.then(data=>console.log(data))

//POST
const postData={
    uderId: 6,
    title: "fare la spesa",
    completed: false
}

fetch(url,{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(postData)})
.then(response=>response.json())
.then(data=>console.log(data))
.catch((e)=>{"errore durante la richiesta", e})

//PUT
const putData={
    uderId: 6,
    title: "andare a fare shopping",
    completed: false
}

fetch("https://jsonplaceholder.typicode.com/todos/1",{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(putData)
})
.then(response=>response.json())
.then(data=>console.log(data))
.catch((e)=>{"errore durante la richiesta", e})

//DELETE
fetch("https://jsonplaceholder.typicode.com/todos/127",{method:"DELETE"})
.then(response=>{
    if(!request.ok){ //errore specifico che riguarda la richiesta
        throw new Error(request.status)
    }
    console.log("elemento eliminato con successo")
})
.catch((e)=>{"errore durante la richiesta", e}) //errore generale della risposta server
