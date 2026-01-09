import { getSearchButton, getSearchInputValue, showLoading, hideLoading, renderProfile } from './ui.js';
import { getUserProfile, validateUserName } from './profile.js';

/**
 * Inicializa os event listeners da aplicação
 */
const initEventListeners = () => {
    const btnSearch = getSearchButton();
    btnSearch.addEventListener('click', handleSearch);
};

/**
 * Gerencia a busca de perfil do usuário
 */
const handleSearch = async () => {
    const userName = getSearchInputValue();

    if (!validateUserName(userName)) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        return;
    }

    showLoading();

    try {
        const userData = await getUserProfile(userName);
        renderProfile(userData);
    } catch (error) {
        alert('Usuário não encontrado. Por favor, verifique o nome do usuário e tente novamente.');
    } finally {
        hideLoading();
    }
};

// Inicializa a aplicação quando o DOM estiver pronto
initEventListeners();
