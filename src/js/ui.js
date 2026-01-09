/**
 * Captura elementos do DOM
 */
const DOMElements = {
    inputSearch: document.getElementById('input-search'),
    btnSearch: document.getElementById('btn-search'),
    profileResults: document.querySelector('.profile-results'),
    loadingElement: document.getElementById('loading'),
};

/**
 * Exibe o elemento de carregamento
 */
export const showLoading = () => {
    DOMElements.loadingElement.style.display = 'flex';
};

/**
 * Oculta o elemento de carregamento
 */
export const hideLoading = () => {
    DOMElements.loadingElement.style.display = 'none';
};

/**
 * Renderiza o perfil do usuário
 * @param {Object} userData - Dados do usuário do GitHub
 */
export const renderProfile = (userData) => {
    DOMElements.profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Não Possui Bio Cadastrada 😒.'}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
    `;
};

/**
 * Limpa os resultados do perfil
 */
export const clearProfile = () => {
    DOMElements.profileResults.innerHTML = '';
};

/**
 * Obtém o valor do input de busca
 * @returns {string} Valor do input trimado
 */
export const getSearchInputValue = () => {
    return DOMElements.inputSearch.value.trim();
};

/**
 * Limpa o input de busca
 */
export const clearSearchInput = () => {
    DOMElements.inputSearch.value = '';
};

/**
 * Retorna o botão de busca
 * @returns {HTMLElement} Elemento do botão
 */
export const getSearchButton = () => {
    return DOMElements.btnSearch;
};
