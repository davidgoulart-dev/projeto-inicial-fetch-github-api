import { getUser } from "/src/scripts/services/user.js"
import { getRepositories } from "/src/scripts/services/repositories.js"
import { user } from "/src/scripts/objects/user.js"
import { screen } from "/src/scripts/objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => { 
    const userName = document.getElementById('input-search').value
    if(userName.length === 0) {
        alert('Digite um nome de usuário')
        return
    }
getUserProfile(userName) //chama a função getUserProfile passando o valor do input como parâmetro

}) //adiciona um evento de click no botão de pesquisa

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        if(userName.length === 0) {
            alert('Digite um nome de usuário')
            return
        }
        getUserData(userName)
    }

})



async function getUserData (userName) {
const userResponse = await getUser(userName)
if (userResponse.message === 'Not Found') {
    screen.renderNotFound()
    return
}
const repositoriesResponse = await getRepositories(userName)

user.setInfo(userResponse)
user.setRepositories(repositoriesResponse)


screen.renderUser(user)

}



