const ReadLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
    return null;
  };
  
  export default ReadLocalStorage;
  