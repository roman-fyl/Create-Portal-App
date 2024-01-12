

export const fetchData = async (base) => {
  try {
    const response = await fetch(`../../DataBase/${base}.json`);

    if (!response.ok) {
      throw new Error(`Error fetching ${base}. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching ${base}:`, error.message);
    throw error; 
  }
};
