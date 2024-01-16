const SaveLocalStorage = ({ key, value }) => {
    const existingData = JSON.parse(localStorage.getItem(key)) || {};
    
    const updatedData = { ...existingData, ...value };

    localStorage.setItem(key, JSON.stringify(updatedData));
    console.log(`Stored data: ${key}`, updatedData);
    return updatedData;
};

export default SaveLocalStorage;