export async function getGeneros() {
    let url = 'http://localhost:8080/v2/acmefilmes/todos/generos'
    const response = await fetch(url)
    const data = await response.json()
    return data.genero
    
}


export async function getGeneroById (id){
    const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.genero[0]
}
export async function postGenero (genero){
  
    const url = `http://localhost:8080/v2/acmefilmes/genero`
    const options = {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(genero)
    }
    const response = await fetch (url,options)
    return response.ok
}


// Excluir o genero
export async function deleteGenero (id){
    const url = `http://localhost:8080/v2/acmefilmes/deletegenero/${id}`
    const options= {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok

}