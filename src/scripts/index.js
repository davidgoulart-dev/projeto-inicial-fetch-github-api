document.getElementById('btn-search').addEventListener('click', () => { 
    const userName = document.getElementById('input-search').value
getUserProfile(userName) //chama a função getUserProfile passando o valor do input como parâmetro

}) //adiciona um evento de click no botão de pesquisa


async function user (userName) {

    const response = await fetch(`https://api.github.com/users/${userName}`) //await espera a resposta da requisição para continuar a execução do código
    return await response.json()
}

function getUserProfile (userName) {
    user(userName).then(userData => {  
        let userInfo = `<img src="${userData.avatar_url}"alt="Foto do perfil do usuario"/>
               <div class="data">
                <h1>${userData.name ?? 'não possuí nome cadastrado 😥'}</h1>
                <p>${userData.bio ?? 'não possuí bio cadastrada 😥'}</p>
               </div>` 
                             //quando terminar a execução da função user, executa o que está dentro do then
document.querySelector('.profile-data').innerHTML = userInfo

    })

}
