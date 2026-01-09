const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');
const loadingElement = document.getElementById('loading'); // Adicionado

const base_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async() => {
    const userName = inputSearch.value;

    if(userName){
        loadingElement.style.display = 'flex'; // Adicionado

        try {
//console.log(`O valor Digitado é:`, searchTerm);
        const response = await fetch(`${base_URL}/users/${userName}`);
        // Aqui você pode adicionar o valor do input

        if(!response.ok){
            alert('Usuário não encontrado por favor, verefique o nome do usuário e tente novamente.');
            return;
        }

        const userData = await response.json();
        console.log(userData);

        profileResults.innerHTML = `<div class="profile-card">
           <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
           <div class="profile-info">
            <h2>${userData.name}</h2>
            <p>${userData.bio ||'Não Possui Bio Cadastrada 😒.'}</p>
           </div>
        </div>`;

        } catch (error) {
            console.error('Erro ao buscar perfil do usuário:', error);
            alert('Ocorreu um erro ao Buscar o Perfil do usuário. Por Favor, Tente Novamente Mais Tarde.');
        } finally {
            loadingElement.style.display = 'none'; // Adicionado
        }
    }else{
        alert('Por favor, digite um nome de usuário do GitHub.');
    }
});