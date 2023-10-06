export async function fetchExchangeRates(): Promise<any> {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all'); // Substitua 'URL_DA_API_AQUI' pela URL da sua API
    if (!response.ok) {
      throw new Error(
        `Erro ao buscar dados da API: ${response.status}`,
      );
    }

    const data = await response.json();
    const values = Object.keys(data).filter((key) => key !== 'USDT');

    return values;
  } catch (error) {
    console.error('Erro na requisição à API:', error);
    throw error;
  }
}
