const ReadLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      console.error(`No data found for key: ${key}`);
      return {};
    }
  } catch (error) {
    console.error(`Error parsing JSON for key ${key}:`, error);
    return null;
  }
};

export default ReadLocalStorage;