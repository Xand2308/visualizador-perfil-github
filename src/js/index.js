import { fetchGitHubUser, fetchGithubUserRepos } from './githubApi.js';
import { renderProfile } from './profileView.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');
const loading = document.getElementById('loading');

btnSearch.addEventListener('click', async () => {
    const username = inputSearch.value;
    if (!username) {
        alert("Por favor, digite um nome de usuário do GitHub.");
        profileResults.innerHTML = '';
        return;
    }

    loading.classList.add('active');
    profileResults.innerHTML = '';

    try {
        const userData = await fetchGitHubUser(username);
        const userRepos = await fetchGithubUserRepos(username);

        renderProfile(userData, userRepos, profileResults);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        profileResults.innerHTML = '<p>Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.</p>';
    } finally {
        loading.classList.remove('active');
    }
});