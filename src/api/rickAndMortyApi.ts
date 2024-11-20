export const fetchCharacters = async (query: string) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }
    const data = await response.json();
    return data.results; // Sadece karakter listesini döndür
  };