// src/services/propertyService.js
import api from './api';

export const getProperties = async () => {
  try {
    const response = await api.get('/imoveis');
    // --- PEQUENA ALTERAÇÃO AQUI ---
    // A API retorna um objeto com 'data' e 'meta', então precisamos de 'response.data.data'
    const propertiesData = response.data.data;

    if (Array.isArray(propertiesData)) {
      return propertiesData; // Retorna o array de imóveis
    } else {
      console.error("API retornou dados de imóveis em formato inesperado (não é um array na propriedade 'data'):", response.data);
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar imóveis:", error);
    throw error;
  }
};

// A função getPropertyById provavelmente não precisa de alteração se ela retorna um único objeto de imóvel diretamente.
// Mas se ela também retornar um objeto com { data: {...} }, você precisará ajustar também.
// Por enquanto, vamos manter getPropertyById como está até testarmos.
export const getPropertyById = async (id) => {
  try {
    const response = await api.get(`/imoveis/${id}`);
    // Se getPropertyById também retornar { data: {...} }, você faria:
    // return response.data.data;
    // Por enquanto, assumimos que retorna o objeto direto:
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar imóvel com ID ${id}:`, error);
    throw error;
  }
};