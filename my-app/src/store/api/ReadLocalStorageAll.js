const ReadLocalStorageAll = () => {
  const keys = Object.keys(localStorage);
  console.log('Keys:', keys);

  const customers = keys.map((key) => {
    const data = localStorage.getItem(key);
    console.log('Parsed data:', JSON.parse(data));

    try {
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error parsing JSON for key ${key}:`, error);
      return null;
    }
  });

  return customers;
};

export default ReadLocalStorageAll;
