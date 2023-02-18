import { baseUrl } from '/src/scripts/variables.js'
async function repositories (userName) {

    const response = await fetch(`${baseUrl}/${userName}/repos`) //await espera a resposta da requisição para continuar a execução do código
    return await response.json()
}
export { repositories }