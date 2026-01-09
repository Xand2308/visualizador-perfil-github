import { fetchUserProfile } from './api.js';

/**
 * Busca e retorna o perfil do usuário
 * @param {string} userName - Nome do usuário do GitHub
 * @returns {Promise<Object>} Dados do perfil do usuário
 * @throws {Error} Se o usuário não for encontrado
 */
export const getUserProfile = async (userName) => {
    try {
        const profileData = await fetchUserProfile(userName);
        console.log('Perfil obtido com sucesso:', profileData);
        return profileData;
    } catch (error) {
        console.error('Erro ao buscar perfil do usuário:', error);
        throw error;
    }
};

/**
 * Valida o nome do usuário
 * @param {string} userName - Nome do usuário
 * @returns {boolean} True se o nome é válido
 */
export const validateUserName = (userName) => {
    return userName.length > 0;
};
