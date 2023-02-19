import { baseUrl } from '/src/scripts/variables.js'
async function getUser (userName) {

    const response = await fetch(`${baseUrl}/${userName}`) //await espera a resposta da requisição para continuar a execução do código
    return await response.json()
}
export { getUser }