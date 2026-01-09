import { fetchGithubUser, fetchGithubUserRepos } from `./githubapi.js`;
import { renderProfile } from './profileView.js';

const inputSerach = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const proFileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const username = inputSerach.value;
    if (username) {
        alert("Por Favor, Digite um Nome de Usuário do GitHub.");
        proFileResults.innerHTML = '';
        return;
    }

    proFileResults.innerHTML = '<p class="loading">Carregando...</p>';
    try {
        const userData = await fetchGitHubUser(username);
        const userRepos = await fetchGithubUserRepos(username);

        console.log(userRepos);

        renderProfile(userData, userRepos, proFileResults);
    } catch (error) {
        console.error('Erro ao Buscar o Perfil do Usuário:', error);
        alert('Usuario não encontrado.Por Favor, Verefique o Nome de Usuário e Tente Novamente');

        proFileResults.innerHTML = '';
    }
});    