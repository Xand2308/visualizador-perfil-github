const BASE_URL = 'https://api.github.com';

/**
 * Busca dados de um usuário no GitHub
 * @param {string} userName - Nome do usuário do GitHub
 * @returns {Promise<Object>} Dados do usuário
 * @throws {Error} Se o usuário não for encontrado ou houver erro na requisição
 */
export const fetchUserProfile = async (userName) => {
    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }

    return await response.json();
};
