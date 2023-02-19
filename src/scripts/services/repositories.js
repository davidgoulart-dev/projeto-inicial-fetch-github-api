import { baseUrl } from '/src/scripts/variables.js'
async function getRepositories (userName) {

    const response = await fetch(`${baseUrl}/${userName}/repos`) //await espera a resposta da requisição para continuar a execução do código
    return await response.json()
}
export { getRepositories }