import { user } from "/src/scripts/services/user.js"
import { repositories } from "/src/scripts/services/repositories.js"
document.getElementById('btn-search').addEventListener('click', () => { 
    const userName = document.getElementById('input-search').value
getUserProfile(userName) //chama a função getUserProfile passando o valor do input como parâmetro

}) //adiciona um evento de click no botão de pesquisa

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        getUserProfile(userName)
    }

})



function getUserProfile (userName) {
    repositories(userName).then(reposData => {
        console.log(reposData)


    })
    
    user(userName).then(userData => {  
        let userInfo = `<div class="info">
        <img src="${userData.avatar_url}"alt="Foto do perfil do usuario"/>
                    <div class="data">
                    <h1>${userData.name ?? 'não possuí nome cadastrado 😥'}</h1>
                    <p>${userData.bio ?? 'não possuí bio cadastrada 😥'}</p>
                     </div>
               </div>` 
                             //quando terminar a execução da função user, executa o que está dentro do then
document.querySelector('.profile-data').innerHTML = userInfo
getUserRepositories(userName)

    })

}
function getUserRepositories(userName) {
    repos(userName).then(reposData => {
        let repositoriesItens = ""
        reposData.forEach(repo => {
            repositoriesItens += `<li> <a href="${repo.html_url}" target="_blank"> ${repo.name} </a></li>`


    })
    document.querySelector('.profile-data').innerHTML += `
                                                 <div class="repositories section">
                                                 <h2>Repositórios</h2>
                                                 <ul>${repositoriesItens}</ul>
                                                 </div>`
    })
}
